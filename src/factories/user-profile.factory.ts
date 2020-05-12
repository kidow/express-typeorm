import { define } from 'typeorm-seeding'
import * as Faker from 'faker'
import UserProfile from '../entities/user-profile.entity'

define(UserProfile, (faker: typeof Faker) => {
  const userProfile = new UserProfile()
  userProfile.age = faker.random.number(99)
  userProfile.imageUrl = faker.random.image()
  return userProfile
})
