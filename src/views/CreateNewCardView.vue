<template>
  <main class="h-full">
    <RouterLink :to="{path: `/deck/${route.params.deckId}`}">
      <img class="sticky top-12 left-0 h-12" src="../assets/back-icon.svg">
    </RouterLink>
    <div class="w-full mt-8 lg:mt-4 h-4/6">
      <form id="createNewCard" @submit.prevent="submitForm" class="flex flex-col justify-center items-center h-full">
        <div class="flex flex-col justify-center items-center transition-all ease-in h-[70%] sm:w-full lg:w-[90%] rounded-2xl border-2 border-slate-700 shadow-lg shadow-violet-900/30 lg:my-12 mx-auto shadow-lg hover:shadow-violet-900/50">
          <div class="h-[50%] lg:h-[30%] w-full flex flex-col justify-center items-center px-8 pt-4 pb-2">
            <span class="text-md lg:text-lg text-center opacity-50">Front of the card:</span>
            <textarea class="font-bold w-full text-md lg:text-2xl text-center bg-transparent border-none focus:outline-none" maxlength="256" rows="4" v-model="form.cardFront" placeholder="Write a question here..."></textarea>
          </div>
          <div class="h-[50%] lg:h-[70%] w-full flex flex-col justify-center items-center border-t-2 border-dashed border-slate-700 px-8 py-4">
            <span class="text-md lg:text-lg text-center opacity-50">Back of the card:</span>
            <textarea class="w-full text-center text-md lg:text-2xl bg-transparent border-none focus:outline-none" maxlength="1024" rows="24" v-model="form.cardBack" placeholder="Write an answer to recall here..."></textarea>
          </div>
        </div>
        <Transition name="fade" mode="out-in">
          <input type="submit" 
          value="Create new card!"
          class="hover:cursor-pointer mt-8 lg:mt-0 px-4 py-2 border-2 border-slate-700 hover:border-violet-700 transition-all duration-300 text-slate-700 hover:text-stone-50 rounded-lg hover:bg-violet-700 shadow-lg shadow-violet-900/50 hover:scale-105"
          >
        </Transition>
        <div v-if="error">There was an error with the submission, please try again</div>
      </form>
    </div>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
import { auth } from '../../firebase-service'
import axios from 'axios'
export default {
    name: 'PostNewCard',
    data() {
        return {
            form:{
                cardFront: '',
                cardBack: ''
            },
            route: useRoute(),
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
            deckId: this.route.params.deckId,
            ...this.form
          }
          const token = await auth.currentUser.getIdToken()
          await axios.post('https://commit-ai-backend-wzinf3bnqq-ez.a.run.app/createCard', data, {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
          this.$router.push(`/deck/${this.route.params.deckId}`)
        } catch (err) {
          this.error = true
          this.loading = false
          console.log(err)
        }
      }
    }
  }
</script>