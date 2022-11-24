import { ConnectionOptions } from 'typeorm'

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'babar.db.elephantsql.com',
  port: 5432,
  username: 'herbjgbr',
  password: 'TUGP0m8340OEKPbEMN4uxnhUlhz9WLg4',
  database: 'herbjgbr',
  entities: ['dist/infra/postgres/entities/index.js']
}
