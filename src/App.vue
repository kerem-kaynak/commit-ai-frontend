<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import './assets/tailwind.css'
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-stone-50 lg:px-64 px-8 py-8 flex-col justify-center items-center font-mono">
    <NavigationBar />
    <div class="w-full h-[80%] overflow-auto scrollbar mt-20 lg:mt-0">
      <RouterView v-slot="{ Component }">
        <Transition name="page-opacity" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
      
    </div>
  </div>
</template>

<style>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 200ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>