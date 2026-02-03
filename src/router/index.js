import { createRouter, createWebHistory } from 'vue-router'
import CardRequestView from '../views/CardRequestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'card-request',
      component: CardRequestView
    }
  ],
})

export default router
