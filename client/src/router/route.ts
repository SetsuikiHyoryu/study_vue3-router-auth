import type { IRoute } from '@/services'
import type { Router, RouteRecordRaw } from 'vue-router'

import { useMainStore } from '@/store'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
]

function generateRouter(routeTree: IRoute[]): RouteRecordRaw[] {
  const newRoutes = routeTree.map<RouteRecordRaw>((route: IRoute) => {
    const _route: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      component: () => import(`@/views/${route.name}.vue`),
      children: [],
    }

    if (route.children) {
      _route.children = generateRouter(route.children)
    }

    return _route
  })

  return newRoutes
}

export function bootRouterBeforeEach(router: Router): void {
  router.beforeEach(async (to, from, next) => {
    const mainStore = useMainStore()

    if (mainStore.hasAuth) {
      next()
      return
    }

    await mainStore.setRouteTree()
    const newRoutes = generateRouter(mainStore.routeTree)
    newRoutes.forEach((route) => router.addRoute(route))
    next(to.path)
  })
}
