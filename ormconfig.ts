import { ConnectionOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

type SeedConfigurationOptions = {
  seeds: string[]
  factories: string[]
}

const isProduction = process.env.NODE_ENV === 'production'

const options: ConnectionOptions & SeedConfigurationOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'skyblue',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers'
  },
  dropSchema: !isProduction,
  namingStrategy: new SnakeNamingStrategy(),
  seeds: ['src/seeds/**.*.ts'],
  factories: ['src/factories/**.*.ts']
}

export = options
