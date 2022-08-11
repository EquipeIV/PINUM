import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import sequelize from "sequelize";


//load config

dotenv.config({path: './config/config.env'});

const conn = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST // Validar host remoto p/ ambiente de desenvolvimento compartilhado
  }
);

export default conn;
