import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { ValidationEntity } from '../'
import { Max } from 'class-validator'

@Entity({ name: 'user_profiles' })
export default class Profile extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: '' })
  imageUrl?: string

  @Column({ nullable: false, default: 0 })
  age?: number

  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date
}
