import { EntityRepository, Repository, getRepository } from 'typeorm'
import User from 'entities/User'

@EntityRepository()
export class UserRepository extends Repository<User> {
  private userRepository = getRepository(User)

  async findAll() {
    return await this.userRepository.find()
  }

  async findById(uuid: string) {
    return await this.userRepository.findOne({ where: { uuid } })
  }

  // async store(body: User) {
  //   return await this.userRepository.create(body).save()
  // }

  // async remove(uuid: string) {
  //   const user = await this.userRepository.findOne({ where: { uuid } })
  //   await this.userRepository.remove(user)
  // }
}
