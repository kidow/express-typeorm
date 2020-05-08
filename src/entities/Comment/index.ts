import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn
} from 'typeorm'
import { ValidationEntity } from '../'
import User from 'entities/User'
import Post from 'entities/Post'

@Entity({ name: 'comments' })
export default class Comment extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post
}
