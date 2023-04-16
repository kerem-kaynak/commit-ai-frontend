<script>
import SingleCardPreview from '../components/SingleCardPreview.vue'
import { useRoute } from 'vue-router'
import { auth } from '../../firebase-service'
import { useStore } from 'vuex';

export default {
  data () {
    return {
      route: useRoute(),
      store: useStore(),
      currentUserId: auth.currentUser.uid
    }
  },
  computed: {
    card () {
      return this.store.getters.card(this.route.params.deckId, this.route.params.cardId)
    }
  },
  components: { SingleCardPreview }
}
</script>

<template>
    <main class="h-full">
        <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <RouterLink :to="{path: `/deck/${route.params.deckId}`}">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <SingleCardPreview :cardId="route.params.cardId" :deckId="route.params.deckId" :front="card.front" :back="card.back"/>
    </main> 
</template>