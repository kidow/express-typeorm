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

  @Column({ nullable: false })
  content: string

  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date

  @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post
}
