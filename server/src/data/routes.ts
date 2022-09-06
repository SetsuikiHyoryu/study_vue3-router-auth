export interface IRoute {
  id: number
  // 如果当前元素为子路由，pid 即指向父路由。根级时为 0。
  pid: number
  path: string
  link?: string
  name: string
  title: string
}

export default <IRoute[]>[
  {
    id: 1,
    pid: 0,
    path: '/marxism',
    name: 'Marxism',
    title: '马克思主义',
  },

  {
    id: 2,
    pid: 1,
    path: 'leninism',
    link: '/marxism/leninism',
    name: 'Leninism',
    title: '列宁主义',
  },

  {
    id: 3,
    pid: 2,
    path: 'maoism',
    link: '/marxism/leninism/maoism',
    name: 'Maoism',
    title: '毛主义',
  },
]
