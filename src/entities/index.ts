import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Generated,
  CreateDateColumn
} from 'typeorm'
import * as faker from 'faker/locale/ko'
import { validateOrReject } from 'class-validator'

export class ValidationEntity extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  protected async validate(): Promise<void> {
    await validateOrReject(this)
  }
}

export class UUIDEntity extends ValidationEntity {
  @Column()
  @Generated('uuid')
  uuid: string

  @BeforeInsert()
  protected uuidset() {
    const tokens = faker.random.uuid().split('-')
    this.uuid = tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
  }
}

export class DateEntity extends ValidationEntity {
  @CreateDateColumn()
  createdAt: Date

  @Column({ nullable: true })
  updatedAt: Date

  @Column({ nullable: true })
  deletedAt: Date
}

export class DateUUIDEntity extends DateEntity {
  @Column()
  @Generated('uuid')
  uuid: string

  @BeforeInsert()
  protected uuidset() {
    const tokens = faker.random.uuid().split('-')
    this.uuid = tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
  }
}
