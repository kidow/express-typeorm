import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm'
import { DateEntity } from '.'
import User from 'entities/user.entity'

@Entity({ name: 'groups' })
export default class Group extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @ManyToMany(() => User, (user) => user.groups, { onDelete: 'CASCADE' })
  @JoinTable()
  users: User[]
}
