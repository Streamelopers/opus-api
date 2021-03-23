require('dotenv').config();

module.exports = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
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
}