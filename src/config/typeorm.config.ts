import { DataSource, DataSourceOptions } from 'typeorm';
import { Configuration } from '.';

export const DataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username:process.env.DATABASE_USER,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE_DB,
  migrations: ['./dist/migrations/*.js'],
};

export const AppDataSource = new DataSource(DataSourceOption);