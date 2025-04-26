import { createRouter, createWebHistory } from 'vue-router'
import ClockWrapper from "@/components/ClockWrapper.vue";
import Main from "@/components/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Main
    },
    {
      path:'/clock',
      component: ClockWrapper
    }
  ]
})

export default router
