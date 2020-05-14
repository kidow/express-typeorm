import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import UserProfile from 'entities/user-profile.entity'
import User from 'entities/user.entity'
import Group from 'entities/group.entity'
import Post from 'entities/post.entity'
import Comment from 'entities/comment.entity'

export default class UserSeed implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(UserProfile)().create()
    await factory(Group)().createMany(2)
    await factory(User)().create()
    await factory(Post)().create()
    await factory(Comment)().create()
  }
}
