import { createRouter, createWebHistory } from 'vue-router'
import { bootRouterBeforeEach, routes } from './route'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

bootRouterBeforeEach(router)

export default router
