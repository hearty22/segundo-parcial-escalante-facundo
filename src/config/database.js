
import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize({
  dialect: 'mysql',
  server: "localhost",
  port: 3306,
  database: "books",
  authentication: {
    type: 'default',
    options: {
      userName: "root",
      password: ""
    },
  },
}

);

