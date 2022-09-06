import type { Application } from 'express'

import express from 'express'
import bodyParser from 'body-parser'

const app: Application = express()
const PORT = 9491

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Comrades! Server is running on ${PORT}.`)
})
