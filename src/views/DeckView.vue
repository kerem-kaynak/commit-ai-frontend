<template>
  <main>
    <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <RouterLink to="/">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="card in cards" :key="card" class="m-8">
        <CardPreview :cardId="card?.id" :deckId="route.params.deckId" :front="card?.front" :back="card?.back"/>
      </li>
      <li class="m-8">
        <CreateNewCard :deckId="route.params.deckId" />
      </li>
    </ul>
    <div class="sticky bottom-0 left-0 h-8 w-full bg-gradient-to-t from-stone-50 z-50"></div>

  </main>
</template>

<script>
import CardPreview from '../components/CardPreview.vue'
import CreateNewCard from '../components/CreateNewCard.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  data () {
    return {
      route: useRoute(),
      store: useStore()
    }
  },
  components: { CardPreview, CreateNewCard },
  computed: {
    cards () {
      return this.store.getters.cards(this.$route.params.deckId)
    }
  }
}
</script>