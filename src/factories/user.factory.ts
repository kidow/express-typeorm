import { define, factory } from 'typeorm-seeding'
import * as Faker from 'faker'
import User from 'entities/user.entity'
import Group from 'entities/group.entity'
import UserProfile from 'entities/user-profile.entity'

define(User, (faker: typeof Faker) => {
  const user = new User()
  user.name = faker.name.lastName() + faker.name.firstName()
  user.email = `${faker.random.number(100000)}@example.com`
  user.groups = factory(Group)() as any
  user.profile = factory(UserProfile)() as any
  return user
})
