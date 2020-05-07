import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import User from 'entities/User'

export default class UserController {
  private userRepository = getRepository(User)

  async all() {
    return await this.userRepository.find()
  }

  async one(req: Request) {
    return await this.userRepository.findOne(req.params.id)
  }

  async save(req: Request) {
    return await this.userRepository.save(req.body)
  }

  async remove(req: Request) {
    let userToRemove = await this.userRepository.findOne(req.params.id)
    await this.userRepository.remove(userToRemove)
  }
}
