<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/tailwind.css'
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-stone-50 p-16 flex justify-center font-mono">
    <nav id="navbar" class="px-8 py-2 border-2 border-slate-500 rounded-2xl h-fit shadow-lg shadow-stone-300">
      <ul class="flex flex-row gap-8">
        <li class="transition-transform hover:scale-110 hover:ease-in"><RouterLink to="/">Tab 1</RouterLink></li>
        <li class="transition-transform hover:scale-110 hover:ease-in"><RouterLink to="/">Tab 2</RouterLink></li>
        <li class="transition-transform hover:scale-110 hover:ease-in"><RouterLink to="/">My Super Favorite Tab Tab Tab 3</RouterLink></li>
      </ul>
    </nav>
  </div>

  <RouterView />
</template>