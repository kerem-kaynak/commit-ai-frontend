<template>
  <RouterLink to="/deck">
    <div class="flex flex-col justify-center items-center transition-transform h-48 w-64 rounded-2xl border-2 border-slate-700 shadow-lg shadow-stone-500 hover:scale-105">
      <p class="text-xl">{{ deckTitle }}</p>
      <p class="text-base text-slate-400">{{ cardCount }}</p>
    </div>
  </RouterLink>
  
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        deckTitle: String,
        cardCount: Number
    },
    components: { RouterLink }
}
</script>