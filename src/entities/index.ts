import { BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm'
import { validateOrReject } from 'class-validator'

export abstract class ValidationEntity extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  protected async validate(): Promise<void> {
    await validateOrReject(this)
  }
}
