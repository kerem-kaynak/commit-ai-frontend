<script setup>
import { ref } from 'vue';
import DeckPreview from '../components/DeckPreview.vue'
import CreateNewDeck from '../components/CreateNewDeck.vue'
import { useStore} from "vuex";
import {computed} from "vue";
import { auth } from '../../firebase-service'
import { useRouter } from 'vue-router';

    const store = useStore()
    const router = useRouter()
    const decks = ref([{id:'1', title: 'Sample Deck 1', count: '48 cards', recall: 1}, {id:'1', title: 'Sample Deck 2', count: '32 cards', recall: 2}, {id:'2', title: 'Sample Deck 2', count: '32 cards', recall: 3}])


  auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });
  const user = computed(() => {
    return store.getters.user;
  });
  const signOut = async () => {
        store.dispatch('logOut').then(
          router.push('/login')
        )
  }

</script>

<template>
  <main v-if="user.loggedIn">
    <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="deck in decks" :key="deck" class="m-8">
        <DeckPreview :id="deck.id" :deckTitle="deck.title" :cardCount="deck.count" :recallLevel="deck.recall"/>
      </li>
      <li class="m-8">
        <CreateNewDeck />
      </li>
    </ul>
    <div class="sticky bottom-0 left-0 h-8 w-full bg-gradient-to-t from-stone-50 z-50"></div>
  </main>
</template>
