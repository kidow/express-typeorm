import { define, factory } from 'typeorm-seeding'
import * as Faker from 'faker'
import Comment from 'entities/comment.entitiy'
import User from 'entities/user.entity'
import Post from 'entities/post.entity'

define(Comment, (faker: typeof Faker) => {
  const comment = new Comment()
  comment.content = faker.lorem.sentence()
  comment.user = factory(User)() as any
  comment.post = factory(Post)() as any
  return comment
})
