import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn
} from 'typeorm'
import { IsEmail, Length } from 'class-validator'
import { ValidationEntity } from '../'
import Post from 'entities/Post'
import Comment from 'entities/Comment'

@Entity({ name: 'users' })
export default class User extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
    nullable: false,
    length: 32,
    update: false,
    type: 'char'
  })
  @Length(32, 32)
  uuid: string

  @Column({ default: 2, nullable: false, type: 'tinyint' })
  status: number

  @Column({ unique: true, nullable: false, length: 45 })
  @IsEmail()
  @Length(1, 45)
  email: string

  @Column({ nullable: false, length: 25 })
  @Length(1, 25)
  name: string

  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date

  @OneToMany(() => Post, (post) => post.user)
  @JoinColumn()
  posts: Post[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]
}
