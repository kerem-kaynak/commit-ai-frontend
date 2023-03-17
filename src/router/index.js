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
      path: '/deck/:id',
      name: 'deck',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DeckView,
    },{
      path: '/deck/:deckId/card/:cardId',
      name: 'card',
      component: CardView
    },
    {
      path:'/deck/:deckId/create_new_card',
      name:'create_new_card',
      component: CreateNewCardView
    },
    {
      path: '/create_new_deck',
      name: 'create_new_deck',
      component: CreateNewDeckView
    }
  ]
})

export default router
