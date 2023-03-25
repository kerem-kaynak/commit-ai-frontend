<script setup>
import DeckPreview from '../components/DeckPreview.vue'
import CreateNewDeck from '../components/CreateNewDeck.vue'
import axios from 'axios'
import { auth } from '../../firebase-service'
import { ref, onMounted } from 'vue'

const currentUserId = auth.currentUser.uid
let decks = ref(null)
onMounted(async () => {
  const token = await auth.currentUser.getIdToken()
  const res = await axios.get('https://commit-ai-backend-wzinf3bnqq-ez.a.run.app/getDecks', {
    headers: {
      authorization: `Bearer ${token}`
    },
    params: {
      userId: currentUserId
    }})
  decks.value = res.data
})

</script>

<template>
  <main>
    <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <ul v-if="decks" class="flex flex-row flex-wrap justify-center">
      <li v-for="deck in decks" :key="deck" class="m-8">
        <DeckPreview :id="deck.id" :deckTitle="deck.name" :deckDescription="deck.description" :cardCount="'placeholder'" :recallLevel="Math.floor(Math.random() * (3 - 1 + 1) + 1)"/>
      </li>
      <li class="m-8">
        <CreateNewDeck />
      </li>
    </ul>
    <div class="sticky bottom-0 left-0 h-8 w-full bg-gradient-to-t from-stone-50 z-50"></div>
  </main>
</template>
