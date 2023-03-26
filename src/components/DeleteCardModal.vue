<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 bg-gray-500/50 flex justify-center items-center z-50">
    <div class="bg-stone-50 overflow-x-auto flex flex-col rounded-lg shadow-xl border-2 border-slate-700 shadow-violet-900/50">
      <header class="pb-4 pt-8 px-8 flex relative font-bold text-xl">
        <slot name="header">
          This is the default title!
        </slot>
        <button
          type="button"
          class="absolute top-0 right-0 border-none text-xl p-4 cursor-pointer font-bold text-slate-700 bg-transparent"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="relative pt-4 pb-8 px-8">
        <slot name="body">
          This is the default body!
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DeleteCardModal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>