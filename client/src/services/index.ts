import type { AxiosResponse } from 'axios'
import type { IRoute, IResponse } from './model'

import { http } from '@/libraries'

export { IRoute, IResponse }

export async function getRouteList(uid: number) {
  try {
    const response: AxiosResponse<
      IResponse<IRoute[]>,
      { uid: number }
    > = await http({
      url: '/api/tutor_router_list',
      method: 'POST',
      data: { uid },
    })

    return response.data.data
  } catch (error) {
    throw error
  }
}
