import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { IsEmail, Length } from 'class-validator'
import { ValidationEntity } from '../'

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
  created_at: Date

  @Column({ nullable: true })
  updated_at: Date

  @Column({ nullable: true })
  deleted_at: Date
}
