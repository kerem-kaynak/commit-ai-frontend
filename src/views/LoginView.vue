<template>
  <div class="h-full relative flex flex-col justify-center overflow-hidden px-1 lg:px-0">
    <div class="w-full p-6 mx-auto bg-white rounded shadow-lg ring-2 ring-slate-800/50 lg:max-w-md transition-all ease-in shadow-none lg:shadow-xl shadow-violet-900/30 hover:shadow-violet-900/50">
        <h1 class="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Commit AI</h1>

        <form action="#" @submit.prevent="Login">
            <div>
                <label for="email" class="block text-sm text-gray-800">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="email"
                    class="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-violet-900 focus:ring-violet-900/10 focus:outline-none focus:ring focus:ring-opacity-10"/>
            </div>
            <div class="mt-4">
                <div>
                    <label for="password" class="block text-sm text-gray-800">Password</label>
                    <input 
                      id="password"
                      type="password"
                      name="password"
                      required
                      v-model="password"
                      class="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-violet-900 focus:ring-violet-900/10 focus:outline-none focus:ring focus:ring-opacity-10" />
                </div>
                <a href="#" class="text-xs text-gray-600 hover:underline">Forgot Password?</a>
                <div class="mt-6">
                    <button
                        type="submit"
                        class="w-full hover:cursor-pointer mt-8 lg:mt-0 px-4 py-2 border-2 border-slate-800/50 hover:border-violet-700 transition-all duration-300 text-slate-700 hover:text-stone-50 rounded-lg hover:bg-violet-700 shadow-lg  hover:scale-105 active:scale-105 active:translate-y-2">
                        Log in!
                    </button>
                </div>
            </div>
        </form>
        <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <RouterLink to="/register"
                class="font-medium text-purple-600 hover:underline">Signup</RouterLink></p>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { auth } from '../../firebase-service'
import {computed} from "vue";

export default {
  name: "LoginComponent",
    setup() {
  //     auth.onAuthStateChanged(user => {
  //   store.dispatch("fetchUser", user);
  // });
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    

    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }

    const user = computed(() => {
    return store.getters.user;
  });

  if (user.value.loggedIn) {
    router.push('/')
  }

    return { Login, email, password, error }

    
  }
};
</script>