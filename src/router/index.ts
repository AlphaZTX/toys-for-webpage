import { createRouter, createWebHistory } from 'vue-router'
import ClockWrapper from "@/components/ClockWrapper.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/clock',
      component: ClockWrapper
    }
  ]
})

export default router
