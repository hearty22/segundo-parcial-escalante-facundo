

import { Sequelize } from '@sequelize/core';
import { MsSqlDialect } from '@sequelize/mssql';

export const sequelize = new Sequelize({
  dialect: MsSqlDialect,
  server: process.env.DB_DIALECT,
  port: 3306,
  database: process.env.DB_NAME,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
});

