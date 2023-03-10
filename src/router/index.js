import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeckView from '../views/DeckView.vue'
import CreateNewDeckView from '../views/CreateNewDeckView.vue'
import CreateNewCardView from '../views/CreateNewCardView.vue'
import CardView from '../views/CardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/deck',
      name: 'deck',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DeckView
    },
    {
      path: '/create_new_deck',
      name: 'create_new_deck',
      component: CreateNewDeckView
    },
    {
      path: '/card',
      name: 'card',
      component: CardView
    },
    {
      path:'/create_new_card',
      name:'create_new_card',
      component: CreateNewCardView
    }
  ]
})

export default router
