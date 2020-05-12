import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { ValidationEntity } from '.'
import User from 'entities/user.entity'
import Comment from 'entities/comment.entitiy'
import { Length } from 'class-validator'

@Entity({ name: 'posts' })
export default class Post extends ValidationEntity {
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
