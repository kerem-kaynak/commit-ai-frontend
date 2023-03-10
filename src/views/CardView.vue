<script setup>
import { ref } from 'vue';
import SingleCardPreview from '../components/SingleCardPreview.vue'
const card = ref({front: 'front 1', back: 'back 1'})
</script>

<template>
    <SingleCardPreview :front="card.front" :back="card.back"/>    
</template>