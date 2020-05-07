import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { uuid } from 'utils'
import { IsEmail } from 'class-validator'
import { ValidationEntity } from '../'

@Entity({ name: 'users' })
export default class User extends ValidationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
    nullable: false,
    length: 32,
    update: false
  })
  uuid: string

  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string

  @Column()
  name: string

  @Column()
  age: number

  @CreateDateColumn()
  created_at: Date
}
