<template>
  <RouterLink :to="{path: `/deck/${deckId}/card/${cardId}`}">
    <div class="relative flex flex-col justify-center items-center transition-transform h-96 w-64 lg:w-96 rounded-2xl border-2 border-slate-700 shadow-lg shadow-stone-500 hover:scale-105 overflow-hidden">
      <p class="text-xl">{{ front }}</p>
      <div class="absolute bottom-0 bg-violet-800 w-full h-12 opacity-70"></div>
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
      cardId: String,
      deckId: String,
      front: String,
      back: String
    },
    components: { RouterLink }
}
</script>