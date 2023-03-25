<script setup>
import { ref, onMounted } from 'vue';
import SingleCardPreview from '../components/SingleCardPreview.vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { auth } from '../../firebase-service'

const route = useRoute()
const currentUserId = auth.currentUser.uid
let card = {
  front: ref(null),
  back: ref(null)
}

onMounted(async () => {
  const token = await auth.currentUser.getIdToken()
  const res = await axios.get('https://commit-ai-backend-wzinf3bnqq-ez.a.run.app/getCard', {
    headers: {
      authorization: `Bearer ${token}`
    }, 
    params: {
      userId: currentUserId,
      deckId: route.params.deckId,
      cardId: route.params.cardId }})
  card.front.value = res.data.front
  card.back.value = res.data.back
})
</script>

<template>
    <main class="h-full">
        <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <RouterLink :to="{path: `/deck/${route.params.deckId}`}">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <SingleCardPreview :cardId="route.params.cardId" :deckId="route.params.deckId" :front="card.front.value" :back="card.back.value"/>
    </main> 
</template>