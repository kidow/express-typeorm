import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Generated,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique
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

@Unique(['uuid'])
export class UUIDEntity extends ValidationEntity {
  @Column()
  @Generated('uuid')
  uuid: string

  // 버퍼 형식으로 저장하고 가져오려면?
  @BeforeInsert()
  protected uuidset() {
    const tokens = faker.random.uuid().split('-')
    this.uuid = tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
  }
}

export class DateEntity extends ValidationEntity {
  @CreateDateColumn()
  readonly createdAt: Date

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date
}

// 다중 클래스 상속은 불가능한가?
@Unique(['uuid'])
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
