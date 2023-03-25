<script setup>
import { ref } from 'vue';
import DeckPreview from '../components/DeckPreview.vue'
import CreateNewDeck from '../components/CreateNewDeck.vue'
const decks = ref([{id:'1', title: 'Sample Deck 1', count: '48 cards', recall: 1}, {id:'1', title: 'Sample Deck 2', count: '32 cards', recall: 2}, {id:'2', title: 'Sample Deck 2', count: '32 cards', recall: 3}])

</script>

<template>
  <main>
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
