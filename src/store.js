import { createStore } from 'vuex'
import { auth, db } from '../firebase-service'
import { doc, setDoc } from "firebase/firestore"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, updateProfile} from 'firebase/auth'
import axios from 'axios'
import env from '../envConfig';

const store = createStore({
  state: {
    user: {
        loggedIn: false,
        data: null
    },
    decks: null,
    error: null
  },    
  
  getters: {
    user(state){
      return state.user
    },
    decks(state){
      return state.decks
    },
    deck: (state) => (deckId) => {
      const res = state.decks?.filter(deck => deck.id === deckId)
      return res ? res[0] : null
    },
    cards: (state) => (deckId) => {
      const res = state.decks?.filter(deck => deck.id === deckId)
      return res ? res[0].cards : null
    },
    card: (state) => (deckId, cardId) => {
      const deck = state.decks?.filter(deck => deck.id === deckId)
      const cards = deck ? deck[0].cards?.filter(card => card.id === cardId) : null
      return cards ? cards[0] : null
    },
    error (state) {
      return state.error
    }
  },
  mutations: {
    syncData(state, data) {
      state.decks = data
    },
    deleteCard(state, deckId, cardId) {
      let deckIndex = state.decks?.findIndex(deck => deck.id == deckId)
      let cardIndex = state.decks?.deckIndex?.cards?.findIndex(card => card.id == cardId)
      state.decks[deckIndex].cards.splice(cardIndex, 1)
    },
    createCard(state, deckId, data) {
      let deckIndex = state.decks?.findIndex(deck => deck.id == deckId)
      state.decks[deckIndex]?.cards?.push(data)
    },
    createDeck(state, data) {
      state.decks.push(data)
    },
    deleteDeck(state, deckId) {
      let deckIndex = state.decks.findIndex(deck => deck.id == deckId)
      state.decks.splice(deckIndex, 1)
    },
    SET_USER(state, payload) {
      state.user.data = payload
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    setError(state, error) {
      state.error = error
    }
  },
  actions: {
      async register(context, { email, password, name}){
        try {
          const {user} = await createUserWithEmailAndPassword(auth, email, password)
          if (user) {
              context.commit('SET_USER', user)
              await updateProfile(user, {displayName: name})
              await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                displayName: user.displayName
              })
          } else {
              throw new Error("Unable to register user, please make sure you've used a valid email address and password")
          }
        } catch (err) {
          context.commit('setError', err)
          throw new Error("Unable to register user, please make sure you've used a valid email address and password")
        }
      },

      async logIn(context, { email, password }){
        try{
          const response = await signInWithEmailAndPassword(auth, email, password)
          if (response) {
              context.commit('SET_USER', response.user)
              context.dispatch('syncData')
          } else {
              throw new Error('Login failed! Please check your credentials.')
          }
        } catch (err) {
          context.commit('setError', err)
          throw new Error('Login failed! Please check your credentials.')
        }
    },

    async logOut(context){
        await signOut(auth)
        context.commit('SET_USER', null)
        context.commit('SET_LOGGED_IN', false)
    },
    
    async fetchUser(context ,user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        context.commit("SET_USER", null);
      }
    },

    async deleteCard(context, data) {
      const token = await auth.currentUser.getIdToken()
      await axios.post(`${env.apiHost}/deleteCard`, data, {
          headers: {
              authorization: `Bearer ${token}`
          }
      })
      context.commit('deleteCard', data.deckId, data.cardId)
      context.dispatch('syncData')
    },

    async createCard(context, data) {
      const token = await auth.currentUser.getIdToken()
      const res = await axios.post(`${env.apiHost}/createCard`, JSON.stringify(data), {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      context.commit('createCard', data.deckId, { id: res.id, front: data.cardFront, back: data.cardBack })
      context.dispatch('syncData')
    },

    async createDeck(context, data) {
      const token = await auth.currentUser.getIdToken()
      const res = await axios.post(`${env.apiHost}/createDeck`, data, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      context.commit('createDeck', { id: res.id, name: data.deckName, description: data.deckDescription })
      context.dispatch('syncData')
    },

    async deleteDeck(context, data) {
      console.log('deleteDeck')
    },

    async syncData(context) {
      const userId = auth.currentUser?.uid
      if (userId) {
        let decks = []
        const res = await axios.get(`${env.apiHost}/getDecks?userId=${userId}`)
        for (let i = 0; i < res.data.length; i++) {
          const cardsRes = await axios.get(`${env.apiHost}/getCards?userId=${userId}&deckId=${res.data[i].id}`)
          decks.push({...res.data[i], cards: cardsRes.data})
        }
        context.commit('syncData', decks)
      }
    }
  }
  

})



// export the store
export default store
