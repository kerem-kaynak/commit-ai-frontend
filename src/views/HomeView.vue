<script>
import DeckPreview from '../components/DeckPreview.vue'
import CreateNewDeck from '../components/CreateNewDeck.vue'
import { useStore } from 'vuex';

export default {
  data () {
    return {
      store: useStore(),
    }
  },
  components: { DeckPreview, CreateNewDeck },
  computed: {
    decks () {
      return this.store.getters.decks
    }
  }
}

</script>

<template>
  <main>
    <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <ul v-if="decks" class="flex flex-row flex-wrap justify-center">
      <li v-for="(deck, index) in decks" :key="deck" class="m-8">
        <DeckPreview :id="deck.id" :deckTitle="deck.name" :deckDescription="deck.description" :cardCount="'placeholder'" :recallLevel="(index % 3) + 1"/>
      </li>
      <li class="m-8">
        <CreateNewDeck />
      </li>
    </ul>
    <div class="sticky bottom-0 left-0 h-8 w-full bg-gradient-to-t from-stone-50 z-50"></div>
  </main>
</template>
