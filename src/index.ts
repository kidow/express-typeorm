import 'reflect-metadata'
import 'dotenv/config'
import { createConnection } from 'typeorm'
import * as express from 'express'
import { Request, Response } from 'express'
import { Routes } from 'routes'
import { User } from 'entities'
import * as faker from 'faker/locale/ko'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'

const PORT = process.env.PORT || 4000

createConnection()
  .then(async (connection) => {
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
    await connection.manager.save(
      connection.manager.create(User, {
        firstName: faker.name.lastName(),
        lastName: faker.name.firstName(),
        age: faker.random.number(99)
      })
    )

    console.log(`Express server has started on port ${PORT}.`)
  })
  .catch((err) => console.log(err))
