import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { DateUUIDEntity } from '.'
import User from 'entities/user.entity'
import Comment from 'entities/comment.entity'

@Entity({ name: 'posts' })
export default class Post extends DateUUIDEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  title: string

  @Column({ nullable: false })
  content: string

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[]
}
