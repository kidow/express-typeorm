import 'reflect-metadata'
import 'dotenv/config'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'
import { useExpressServer } from 'routing-controllers'
import UserProfile from 'entities/user-profile.entity'
import * as faker from 'faker/locale/ko'
import Group from 'entities/group.entity'
import User from 'entities/user.entity'
import Post from 'entities/post.entity'
import { uuid } from 'utils'
import Comment from 'entities/comment.entitiy'

const PORT = process.env.PORT || 4000
const isProd = process.env.NODE_ENV === 'production'

createConnection()
  .then(async () => {
    const app = express()
    app.use(morgan('dev'))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    if (isProd) app.use(express.static(__dirname + '/dist'))
    app.use(cookieParser())

    // register express routes from defined application routes
    // Routes.forEach((route) => {
    //   app[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //     const result = new route.controller()[route.action](req, res, next)
    //     if (result instanceof Promise) {
    //       result.then((result) =>
    //         result !== null && result !== undefined ? res.send(result) : undefined
    //       )
    //     } else if (result !== null && result !== undefined) {
    //       res.json(result)
    //     }
    //   })
    // })
    // setup express app here
    // ...
    useExpressServer(app, {
      controllers: [__dirname + '/controllers/**/*.ts'],
      middlewares: [__dirname + '/middlewares/**/*.ts'],
      cors: true,
      defaultErrorHandler: false
    }).listen(PORT)

    // insert new users for test
    // const profile = await UserProfile.create({
    //   age: faker.random.number(99),
    //   imageUrl: faker.random.image()
    // }).save()
    // const groups: Group[] = [
    //   await Group.create({ name: faker.company.companySuffix() }).save(),
    //   await Group.create({ name: faker.company.companySuffix() }).save()
    // ]
    // const user = await User.create({
    //   name: faker.name.lastName() + faker.name.firstName(),
    //   email: `${faker.random.number(100000)}@example.com`,
    //   uuid: uuid(),
    //   groups,
    //   profile
    // }).save()
    // const post = await Post.create({
    //   title: faker.random.word(),
    //   content: faker.random.words(),
    //   uuid: uuid(),
    //   user
    // }).save()
    // await Comment.create({
    //   content: faker.lorem.sentence(),
    //   user,
    //   uuid: uuid(),
    //   post
    // }).save()

    console.log(`Express server has started on port ${PORT}.`)
  })
  .catch((err) => console.log('createConnection err: ', err))
