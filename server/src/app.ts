import type { Application, Request, Response } from 'express'
import type { IRoute, ITutor } from './data'

import express from 'express'
import bodyParser from 'body-parser'
import { routes, tutors } from './data'

const app: Application = express()
const PORT = 9491

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

interface IBody {
  uid: number
}

app.post('/tutor_router_list', (request: Request, response: Response): void => {
  const sendResposne = (data: IRoute[] | null, message: string = ''): void => {
    response.status(200).send({ data, message })
  }

  const { uid }: IBody = request.body

  if (!uid) {
    sendResposne(null, 'No UID received.')
    return
  }

  const tutorInfo: ITutor | undefined = tutors.find(
    (tutor: ITutor) => tutor.id === uid
  )

  if (!tutorInfo) {
    sendResposne(null, 'No user info for this UID.')
    return
  }

  const authRouteList: IRoute[] = routes.filter((route: IRoute) =>
    tutorInfo.auth.includes(route.id)
  )

  sendResposne(authRouteList)
})

app.listen(PORT, () => {
  console.log(`Comrades! Server is running on ${PORT}.`)
})
