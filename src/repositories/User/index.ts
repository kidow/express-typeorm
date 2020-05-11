import { EntityRepository, Repository, getRepository } from 'typeorm'
import User from 'entities/User'

@EntityRepository()
export default class UserRepository extends Repository<User> {
  private userRepo = getRepository(User)

  async findAll() {
    return await this.userRepo.find()
  }

  async findById(id: number) {
    return await this.userRepo.findOne({ where: { id } })
  }

  async findByEmail(email: string) {
    return await this.userRepo.findOne({ where: { email } })
  }

  async store(user: User) {
    return await this.userRepo.create(user).save()
  }

  // async store(body: User) {
  //   return await this.userRepo.create(body).save()
  // }

  // async remove(uuid: string) {
  //   const user = await this.userRepo.findOne({ where: { uuid } })
  //   await this.userRepo.remove(user)
  // }
}
