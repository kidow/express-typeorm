import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn
} from 'typeorm'
import { ValidationEntity } from '.'
import User from '../entities/user.entity'

@Entity({ name: 'groups' })
export default class Group extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date

  @ManyToMany(() => User, (user) => user.groups, { onDelete: 'CASCADE' })
  @JoinTable()
  users: User[]
}
