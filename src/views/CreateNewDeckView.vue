<template>
  <main class="h-full">
    <RouterLink to="/">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <div class="w-full mt-8 lg:mt-4 h-4/6">
      <form id="createNewCard" @submit.prevent="submitForm" class="flex flex-col justify-center items-center h-full">
        <div class="flex flex-col justify-center items-center transition-all ease-in h-[70%] sm:w-full lg:w-[90%] rounded-2xl border-2 border-slate-700 shadow-lg shadow-violet-900/30 lg:my-12 mx-auto shadow-lg hover:shadow-violet-900/50">
          <div class="h-[50%] lg:h-[30%] w-full flex flex-col justify-center items-center px-8 pt-4 pb-2">
            <span class="text-md lg:text-lg text-center opacity-50">Deck Name</span>
            <textarea class="font-bold w-full text-md lg:text-2xl text-center bg-transparent border-none focus:outline-none" maxlength="256" rows="4" v-model="form.deckName" placeholder="Give your deck a cool name here..." required></textarea>
          </div>
          <div class="h-[50%] lg:h-[70%] w-full flex flex-col justify-center items-center border-t-2 border-dashed border-slate-700 px-8 py-4">
            <span class="text-md lg:text-lg text-center opacity-50">Description</span>
            <textarea class="w-full text-center text-md lg:text-2xl bg-transparent border-none focus:outline-none" maxlength="1024" rows="24" v-model="form.deckDescription" placeholder="Write a short description for your deck here..." required></textarea>
          </div>
        </div>
        <Transition name="fade" mode="out-in">
          <input type="submit"
          :disabled="loading"
          v-if="!loading" 
          value="Create new deck!"
          class="hover:cursor-pointer px-4 py-2 border-2 border-slate-700 hover:border-violet-700 transition-all duration-300 text-slate-700 hover:text-stone-50 rounded-lg hover:bg-violet-700 shadow-lg shadow-violet-900/50 hover:scale-105"
          >

        </Transition>
        <div v-if="error">There was an error with the submission, please try again</div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import { auth } from '../../firebase-service'
import env from '../../envConfig'

export default {
    name: 'PostNewDeck',
    data() {
        return {
            form:{
                deckName: '',
                deckDescription: ''               
            },
            loading: false,
            error: false
        }
    },
    methods: {
      async submitForm() {
        this.loading = true
        try {
          const currentUserId = auth.currentUser.uid
          const data = {
            userId: currentUserId,
            ...this.form
          }
          const token = await auth.currentUser.getIdToken()
          await axios.post(`${env.apiHost}/createDeck`, data, {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
          this.$router.push('/')
        } catch (err) {
          this.error = true
          this.loading = false
          console.log(err)
        }
      }
    }
  }
</script>

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