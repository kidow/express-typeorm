import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'

@Middleware({ type: 'after' })
export default class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(err: any, req: Request, res: Response) {
    res.status(err.status || 500).json({ success: false, message: err.message })
  }
}
