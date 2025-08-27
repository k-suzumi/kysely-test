// index.ts - 修正版データベース接続
import type { DB } from './types.js'
import { createPool } from 'mysql2/promise'
import { Kysely, MysqlDialect } from 'kysely'

const pool = createPool({
  database: 'meibo_app',
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
})

const dialect = new MysqlDialect({
  pool: pool
})

export const db = new Kysely<DB>({
  dialect,
  log(event) {
    if (event.level === 'query') {
      console.log('SQL:', event.query.sql)
      console.log('Params:', event.query.parameters)
      console.log('Duration:', event.queryDurationMillis, 'ms')
    }
    if (event.level === 'error') {
      console.error('DB Error:', event.error)
    }
  }
})