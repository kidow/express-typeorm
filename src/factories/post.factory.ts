import { define, factory } from 'typeorm-seeding'
import * as Faker from 'faker'
import Post from '../entities/post.entity'
import { uuid } from 'utils'
import User from '../entities/user.entity'

define(Post, (faker: typeof Faker) => {
  const post = new Post()
  post.title = faker.random.word()
  post.content = faker.random.words()
  post.uuid = uuid()
  post.user = factory(User)() as any
  return post
})
