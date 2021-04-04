require('dotenv').config();

module.exports = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrations: [
    "dist/framework/migrations/*.js"
  ],
  cli: {
    "migrationsDir": "framework/migrations"
  },
  synchronize: process.env.NODE_ENV !== 'production' ? true : false,
  extra: {
       ssl: process.env.NODE_ENV !== 'local' ? true : false,
       rejectUnauthorized: false
  }
}