<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import './assets/tailwind.css'
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-stone-50 px-16 py-8 flex-col justify-center items-center font-mono">
    <NavigationBar />
    <RouterView />
  </div>
</template>