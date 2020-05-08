import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { ValidationEntity } from '../'
import User from 'entities/User'
import Comment from 'entities/Comment'

@Entity({ name: 'posts' })
export default class Post extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @CreateDateColumn()
  created_at: Date

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[]
}
