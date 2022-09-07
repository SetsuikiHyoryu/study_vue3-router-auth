import type { IRoute } from '@/services'

export function formatRouteTree(data: IRoute[]): IRoute[] {
  const routeTree: IRoute[] = []

  data.forEach((route: IRoute): void => {
    const parent: IRoute | undefined = data.find(
      (item: IRoute) => route.pid === item.id
    )

    if (!parent) {
      routeTree.push(route)
      return
    }

    ;(parent.children ?? (parent.children = [])).push(route)
  })

  return routeTree
}
