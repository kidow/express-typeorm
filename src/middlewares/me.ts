import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'

@Middleware({ type: 'before' })
export default class MeMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: () => void) {
    console.log('Me detecting...')
    next()
  }
}
