<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import store from './store'
</script>

<script>
import './assets/tailwind.css'

export default {
  computed: {
    authed () {
      const res = store.getters.user.loggedIn
      return res
    }
  }
}
</script>

<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 bg-stone-50 lg:px-64 px-8 py-8 flex-col justify-center items-center font-mono">
    <NavigationBar v-if="authed"/>
    <div class="w-full h-full lg:h-[80%] overflow-auto scrollbar lg:mt-20 lg:mt-0">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
      
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>