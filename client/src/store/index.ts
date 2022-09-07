import type { IRoute } from '@/services'
import type { Ref } from 'vue'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getRouteList } from '@/services'
import { formatRouteTree } from '@/libraries'

export interface IMainStore {
  uid: Ref<number>
  setUID: (id: number) => void

  hasAuth: Ref<boolean>
  setAuth: (auth: boolean) => void

  routeTree: Ref<IRoute[]>
  setRouteTree: () => Promise<void>
}

const storeSetup = (): IMainStore => {
  const uid = ref<number>(3)
  const setUID = (id: number) => (uid.value = id)

  const hasAuth = ref<boolean>(false)
  const setAuth = (auth: boolean) => (hasAuth.value = auth)

  const routeTree = ref<IRoute[]>([])

  const setRouteTree = async (): Promise<void> => {
    const list: IRoute[] = await getRouteList(uid.value)
    routeTree.value = formatRouteTree(list)
    setAuth(true)
  }

  return {
    uid,
    setUID,

    hasAuth,
    setAuth,

    routeTree,
    setRouteTree,
  }
}

const STORE_ID = 'main'

export const useMainStore = defineStore<typeof STORE_ID, IMainStore>(
  STORE_ID,
  storeSetup
)
