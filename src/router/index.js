import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeckView from '../views/DeckView.vue'
import CreateNewDeckView from '../views/CreateNewDeckView.vue'
import CreateNewCardView from '../views/CreateNewCardView.vue'
import CardView from '../views/CardView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import { auth } from '../../firebase-service'
import store from '../store'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
        title: 'Decks'
      }
    },
    {
      path: '/deck/:deckId',
      name: 'deck',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DeckView,
      meta: {
        requiresAuth: true,
        title: 'Deck'
      }
    },
    {
      path: '/deck/:deckId/card/:cardId',
      name: 'card',
      component: CardView,
      meta: {
        requiresAuth: true,
        title: 'Card'
      }
    },
    {
      path:'/deck/:deckId/create_new_card',
      name:'create_new_card',
      component: CreateNewCardView,
      meta: {
        requiresAuth: true,
        title: 'Create Card'
      }
    },
    {
      path: '/create_new_deck',
      name: 'create_new_deck',
      component: CreateNewDeckView,
      meta: {
        requiresAuth: true,
        title: 'Create Deck'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        requiresAuth: true,
        title: 'About'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      },
      beforeEnter: async (to, from, next) => {
        const currentUserAuthed = store.getters.user.loggedIn || await getCurrentUser()
        if (currentUserAuthed) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        title: 'Register'
      },
      beforeEnter: async (to, from, next) => {
        const currentUserAuthed = store.getters.user.loggedIn || await getCurrentUser()
        if (currentUserAuthed) {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((res,rej) => {
      const removeListener = auth.onAuthStateChanged(
          (user) => {
            store.dispatch("fetchUser", user)
            removeListener()
            res(user)
          },
          rej
      )
  })
}

router.beforeEach(async (to, from, next) => {
  store.commit('setError', null)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const pageTitle = to.meta.title
  document.title = `Commit AI | ${pageTitle}`
  const currentUserAuthed = store.getters.user.loggedIn || await getCurrentUser()
  if (requiresAuth && !currentUserAuthed) {
    next('/login')
  } else {
    store.dispatch('syncData')
    next()
  }
})



export default router
