import 'reflect-metadata'
import 'dotenv/config'
import { createConnection } from 'typeorm'
import * as express from 'express'
import { Request, Response } from 'express'
import { Routes } from 'routes'
import * as faker from 'faker/locale/ko'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'
import User from 'entities/User'
import { uuid } from 'utils'

const PORT = process.env.PORT || 4000

createConnection()
  .then(async ({ manager }) => {
    // create express app
    const app = express()
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())

    // register express routes from defined application routes
    Routes.forEach((route) => {
      app[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = new route.controller()[route.action](req, res, next)
        if (result instanceof Promise) {
          result.then((result) =>
            result !== null && result !== undefined ? res.send(result) : undefined
          )
        } else if (result !== null && result !== undefined) {
          res.json(result)
        }
      })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(PORT)

    // insert new users for test
    await manager.save(
      manager.create(User, {
        name: faker.name.lastName() + faker.name.firstName(),
        email: `${faker.random.number(100000)}@example.com`,
        uuid: uuid()
      })
    )

    console.log(`Express server has started on port ${PORT}.`)
  })
  .catch((err) => console.log(err))
