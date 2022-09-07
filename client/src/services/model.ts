export interface IResponse<Data> {
  data: Data
  message: string
}

export interface IRoute {
  id: number
  // 如果当前元素为子路由，pid 即指向父路由。根级时为 0。
  pid: number
  path: string
  link?: string
  name: string
  title: string
  children?: IRoute[]
}
