import * as faker from 'faker/locale/ko'

export const uuid = () => {
  const tokens = faker.random.uuid().split('-')
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4]
}
