
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('books', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
