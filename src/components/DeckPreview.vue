<template>
  <RouterLink :to="{
    path: `/deck/${id}`
  }">
    <div class="relative flex flex-col justify-center items-center transition-transform h-48 w-64 rounded-2xl border-2 border-slate-700 shadow-lg shadow-stone-500 hover:scale-105 overflow-hidden">
      <p class="text-xl">{{ deckTitle }}</p>
      <p class="text-base text-slate-400">{{ cardCount }}</p>
      <div v-if="recallLevel === 1" class="absolute bottom-0 bg-red-600 w-full h-12 opacity-50"></div>
      <div v-if="recallLevel === 2" class="absolute bottom-0 bg-amber-400 w-full h-12 opacity-50"></div>
      <div v-if="recallLevel === 3" class="absolute bottom-0 bg-green-600 w-full h-12 opacity-50"></div>
    </div>
  </RouterLink>
  
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
      id: String,
      deckTitle: String,
      deckDescription: String,
      cardCount: String,
      recallLevel: Number
    },
    components: { RouterLink },
}
</script>