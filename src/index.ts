import 'reflect-metadata'
import 'dotenv/config'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as morgan from 'morgan'
import { useExpressServer } from 'routing-controllers'

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

    console.log(`Express server has started on port ${PORT}.`)
  })
  .catch((err) => console.log('createConnection err: ', err))
