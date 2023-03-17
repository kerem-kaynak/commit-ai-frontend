<script setup>
import { RouterLink } from 'vue-router'
import '../assets/tailwind.css'
</script>

<template>
  <div class="sticky top-0 lg:flex justify-center items-center hidden lg:text-base flex flex-col">
    <nav id="navbar" class="max-w-fit flex flex-row gap-8 px-8 border-2 border-slate-500 rounded-2xl h-fit shadow-lg shadow-stone-300 bg-stone-50 opacity-90 z-50 mb-8">
      <RouterLink class="text-center my-2 transition-transform border-b-2 hover:border-slate-700 hover:ease-in" to="/">Decks</RouterLink>
      <RouterLink class="text-center my-2 transition-transform border-b-2 hover:border-slate-700 hover:ease-in" to="/about">Study</RouterLink>
      <RouterLink class="text-center my-2 transition-transform border-b-2 hover:border-slate-700 hover:ease-in" to="/c">Learn</RouterLink>
    </nav>
  </div>

  
</template>