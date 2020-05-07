import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn } from 'typeorm'
import { uuid } from 'utils'
import { IsEmail } from 'class-validator'

@Entity({ name: 'users' })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
    nullable: false,
    length: 32,
    update: false,
    default: uuid()
  })
  uuid: string

  @Column()
  @IsEmail()
  email: string

  @Column()
  name: string

  @Column()
  age: number

  @CreateDateColumn()
  created_at: Date
}
