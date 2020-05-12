import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { DateEntity } from '.'

@Entity({ name: 'user_profiles' })
export default class UserProfile extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: '' })
  imageUrl?: string

  @Column({ nullable: false, default: 0 })
  age?: number
}
