<template>
  <RouterLink :to="{path: `/deck/${deckId}/create_new_card`}">
    <div class="bg-gray-100 flex flex-col justify-center items-center transition-transform h-96 w-64 lg:w-96 rounded-2xl border-2 border-slate-400 shadow-lg shadow-stone-500 hover:scale-105">
      <p class="text-2xl text-slate-400">+</p>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    deckId: String
  }
}
</script>