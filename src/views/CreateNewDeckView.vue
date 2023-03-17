<template>
  <main class="h-full">
    <RouterLink to="/">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <div class="w-full mt-8 lg:mt-4 h-4/6">
      <form id="createNewCard" @submit.prevent="submitForm" class="flex flex-col justify-center items-center h-full">
        <div class="flex flex-col justify-center items-center transition-all ease-in h-[70%] sm:w-full lg:w-[90%] rounded-2xl border-2 border-slate-700 shadow-lg shadow-violet-900/30 lg:my-12 mx-auto shadow-lg hover:shadow-violet-900/50">
          <div class="h-[100%] lg:h-[100%] w-full flex flex-col justify-center items-center px-8 pt-4 pb-2">
            <span class="text-md lg:text-lg text-center opacity-50">Deck Name</span>
            <textarea class="font-bold w-full text-md lg:text-2xl text-center bg-transparent border-none focus:outline-none" maxlength="256" rows="4" v-model="form.cardFront" placeholder="Give your deck a cool name here..."></textarea>
          </div>
        </div>
        <input type="submit" 
          value="Create new deck!"
          class="hover:cursor-pointer px-4 py-2 border-2 border-slate-700 hover:border-violet-700 transition-all duration-300 text-slate-700 hover:text-stone-50 rounded-lg hover:bg-violet-700 shadow-lg shadow-violet-900/50 hover:scale-105"
          >
      </form>
    </div>
  </main>
</template>

<script>
export default {
    name: 'PostNewDeck',
    data() {
        return {
            form:{
                deckName: '',                
            },
        }
    },
    methods: {
      submitForm() {
        alert('clicked!')
      }
    }
  }
</script>