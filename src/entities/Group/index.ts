import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn
} from 'typeorm'
import { ValidationEntity } from '../'
import User from 'entities/User'

@Entity({ name: 'groups' })
export default class Group extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToMany(() => User, (user) => user.groups, { onDelete: 'CASCADE' })
  @JoinTable()
  users: User[]
}
