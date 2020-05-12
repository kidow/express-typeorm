import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Generated
} from 'typeorm'
import { UUIDEntity } from '.'
import User from 'entities/user.entity'
import Comment from 'entities/comment.entitiy'
import { Length } from 'class-validator'

@Entity({ name: 'posts' })
export default class Post extends UUIDEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  content: string

  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[]
}
