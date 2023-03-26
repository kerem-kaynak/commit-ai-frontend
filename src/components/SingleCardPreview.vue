<template>
    <div class="relative flex flex-col justify-center items-center transition-all ease-in h-[70%] sm:w-full lg:w-[90%] rounded-2xl border-2 border-slate-700 shadow-lg shadow-violet-900/30 lg:mt-12 mx-auto mt-24 hover:shadow-violet-900/50">
        <div class="h-[30%] w-full flex justify-center items-center p-8">
            <p class="text-2xl">{{ front }}</p>
        </div>
        <div class="h-[70%] w-full flex justify-center items-center border-t-2 border-dashed border-slate-700 p-8">
            <p class="text-xl text-slate-400">{{ back }}</p>
        </div>
        <div class="absolute top-0 right-0 h-8 w-8 m-4 hover:cursor-pointer" @click="showModal">
            <img src="../assets/delete-button.svg" />
        </div>
        <Transition name="fade" mode="out-in">
            <DeleteCardModal @close="closeModal" v-show="isModalVisible">
                <template v-slot:header>
                    Delete this card?
                </template>

                <template v-slot:body>
                    Are you sure you want to delete this card? This action is irreversible.
                    <div class="flex justify-center items-center">
                            <div class="bg-red-500 text-center py-2 px-4 mt-8 cursor-pointer rounded-xl text-stone-50 hover:scale-105 transition-all duration-300 hover:border-violet-700 hover:bg-violet-700 hover:shadow-violet-900/50 shadow-lg" @click="deleteCard">Delete this card</div>
                    </div>
                </template>
            </DeleteCardModal>
        </Transition> 
    </div>
</template>

<script>
import axios from 'axios';
import env from '../../envConfig';
import { useRoute } from 'vue-router';
import { auth } from '../../firebase-service'
import DeleteCardModal from '../components/DeleteCardModal.vue'

export default {
    data () {
        return {
            route: useRoute(),
            isModalVisible: false
        }
    },
    components: { DeleteCardModal },
    props: {
        cardId: String,
        deckId: String,
        front: String,
        back: String
    },
    methods: {
        async deleteCard () {
            const currentUserId = auth.currentUser.uid
            const data = {
                userId: currentUserId,
                deckId: this.route.params.deckId,
                cardId: this.route.params.cardId
            }
            const token = await auth.currentUser.getIdToken()
            await axios.post(`${env.apiHost}/deleteCard`, data, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            this.$router.push(`/deck/${this.route.params.deckId}`)
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}
</script>

<!-- <style>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all .2s ease;
}
</style> -->