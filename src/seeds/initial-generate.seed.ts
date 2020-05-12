import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import UserProfile from 'entities/user-profile.entity'

export default class CreatePets implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(UserProfile)().createMany(10)
  }
}
