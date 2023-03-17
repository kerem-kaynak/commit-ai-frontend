<script setup>
import { ref } from 'vue';
import SingleCardPreview from '../components/SingleCardPreview.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const card = ref({id:1, deckId:'1', front: 'front 1', back: 'back 1'})
</script>

<template>
    <main class="h-full">
        <div class="sticky top-0 left-0 h-8 w-full bg-gradient-to-b from-stone-50 z-50"></div>
    <RouterLink :to="{path: `/deck/${route.params.deckId}`}">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <SingleCardPreview :cardId="card.cardId" :deckId="route.params.deckId" :front="card.front" :back="card.back"/>
    </main> 
</template>