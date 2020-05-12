import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Generated } from 'typeorm'
import * as faker from 'faker/locale/ko'
import { validateOrReject } from 'class-validator'

export abstract class ValidationEntity extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  protected async validate(): Promise<void> {
    await validateOrReject(this)
  }
}

export abstract class UUIDEntity extends ValidationEntity {
  @Column()
  @Generated('uuid')
  uuid: string

  @BeforeInsert()
  protected uuidset() {
    const tokens = faker.random.uuid().split('-')
    this.uuid = tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
  }
}
