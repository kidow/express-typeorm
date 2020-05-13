import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers'
import { Request, Response } from 'express'

@Middleware({ type: 'after' })
export default class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, req: Request, res: Response) {
    res.status(error.status || 500).json({ success: false, message: error.message, error })
  }
}
