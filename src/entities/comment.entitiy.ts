import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { DateUUIDEntity } from '.'
import Post from 'entities/post.entity'
import User from 'entities/user.entity'

@Entity({ name: 'comments' })
export default class Comment extends DateUUIDEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  content: string

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post
}
