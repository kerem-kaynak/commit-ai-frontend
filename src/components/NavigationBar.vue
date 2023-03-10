<script setup>
import { RouterLink } from 'vue-router'
import '../assets/tailwind.css'
</script>

<template>
  <div class="lg:flex justify-center items-center mb-8 hidden lg:text-base">
    <nav id="navbar" class="max-w-fit flex flex-row gap-8 px-8 border-2 border-slate-500 rounded-2xl h-fit shadow-lg shadow-stone-300">
      <RouterLink class="text-center my-2 transition-transform border-b-2 hover:border-slate-700 hover:ease-in" to="/">Tab 1</RouterLink>
      <RouterLink class="text-center my-2 transition-transform border-b-2 hover:border-slate-700 hover:ease-in" to="/about">Tab 2</RouterLink>
      <RouterLink class="text-center my-2 transition-transform border-b-2 hover:border-slate-700 hover:ease-in" to="/c">Tab 3</RouterLink>
    </nav>
  </div>
  
</template>