import 'reflect-metadata'
import 'dotenv/config'
import { createConnection, getConnectionOptions } from 'typeorm'
import * as express from 'express'
import { Request, Response } from 'express'
import { Routes } from 'routes'
import * as faker from 'faker/locale/ko'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'
import * as cors from 'cors'
import User from 'entities/User'
import { uuid } from 'utils'
import Post from 'entities/Post'
import Comment from 'entities/Comment'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import Group from 'entities/Group'
import Profile from 'entities/Profile'

const PORT = process.env.PORT || 4000

getConnectionOptions().then((connectionOptions) =>
  createConnection({ ...connectionOptions, namingStrategy: new SnakeNamingStrategy() })
    .then(async ({ manager }) => {
      // create express app
      const app = express()
      app.use(morgan('dev'))
      app.use(express.json())
      app.use(express.urlencoded({ extended: false }))
      app.use(cors())
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
      const profile = await Profile.create({
        age: faker.random.number(99),
        imageUrl: faker.random.image()
      }).save()
      const groups: Group[] = [
        await Group.create({ name: faker.company.companySuffix() }).save(),
        await Group.create({ name: faker.company.companySuffix() }).save()
      ]
      const user = await User.create({
        name: faker.name.lastName() + faker.name.firstName(),
        email: `${faker.random.number(100000)}@example.com`,
        uuid: uuid(),
        groups,
        profile
      }).save()
      const post = await Post.create({
        title: faker.random.word(),
        content: faker.random.words(),
        user
      }).save()
      await Comment.create({
        content: faker.lorem.sentence(),
        user,
        post
      }).save()

      console.log(`Express server has started on port ${PORT}.`)
    })
    .catch((err) => console.log(err))
)
