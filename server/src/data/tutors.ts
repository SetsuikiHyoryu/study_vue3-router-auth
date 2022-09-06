export interface ITutor {
  id: number
  name: string
  auth: number[]
}

export default <ITutor[]>[
  { id: 1, name: 'Marx', auth: [1] },
  { id: 2, name: 'Lenin', auth: [1, 2] },
  { id: 3, name: 'Mao', auth: [1, 2, 3] },
]
