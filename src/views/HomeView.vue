<script setup>
import { ref } from 'vue';
import DeckPreview from '../components/DeckPreview.vue'
import CreateNewDeck from '../components/CreateNewDeck.vue'
const decks = ref([{title: 'Sample Deck 1', count: '48 cards'}, {title: 'Sample Deck 2', count: '32 cards'}, {title: 'Sample Deck 2', count: '32 cards'}, {title: 'Sample Deck 2', count: '32 cards'}, {title: 'Sample Deck 2', count: '32 cards'}, {title: 'Sample Deck 2', count: '32 cards'}, {title: 'Sample Deck 2', count: '32 cards'}, {title: 'Sample Deck 2', count: '32 cards'}])
</script>

<template>
  <main>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="deck in decks" :key="deck" class="m-8">
        <DeckPreview :deckTitle="deck.title" :cardCount="deck.count"/>
      </li>
      <li class="m-8">
        <CreateNewDeck />
      </li>
    </ul>
  </main>
</template>
