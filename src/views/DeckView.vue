<script setup>
import { ref } from 'vue';
import CardPreview from '../components/CardPreview.vue'
import CreateNewCard from '../components/CreateNewCard.vue'
const deck = ref([{front: 'front 1', back: 'back 1'}, {front: 'front 2', back: 'back 2'}, {front: 'front 3', back: 'back 3'}])
</script>

<template>
  <main>
    <ul class="flex flex-row flex-wrap justify-center">
      <li v-for="card in deck" :key="card" class="m-8">
        <CardPreview :front="card.front" :back="card.back"/>
      </li>
      <li class="m-8">
        <CreateNewCard />
      </li>
    </ul>
  </main>
</template>