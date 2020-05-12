import { define } from 'typeorm-seeding'
import * as Faker from 'faker'
import Group from 'entities/group.entity'

define(Group, (faker: typeof Faker) => {
  const group = new Group()
  group.name = faker.company.companySuffix()
  return group
})
