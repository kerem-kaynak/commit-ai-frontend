<template>
    <div class="flex flex-col justify-center items-center transition-transform h-[50%] sm:w-full lg:w-[50%] m-auto rounded-2xl border-2 border-slate-700 shadow-lg shadow-stone-500 lg:mt-48 mt-24">
      <p class="text-xl">{{ front }}</p>
      <p class="text-base text-slate-400">{{ back }}</p>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        front: String,
        back: String
    },
    components: { RouterLink }
}
</script>