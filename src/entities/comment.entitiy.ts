import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  Generated
} from 'typeorm'
import { UUIDEntity } from '.'
import Post from 'entities/post.entity'
import { Length } from 'class-validator'
import User from 'entities/user.entity'

@Entity({ name: 'comments' })
export default class Comment extends UUIDEntity {
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
