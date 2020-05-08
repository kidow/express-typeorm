import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { ValidationEntity } from '../'

@Entity({ name: 'user_profiles' })
export default class Profile extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  imageUrl?: string

  @Column()
  age?: number

  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date
}
