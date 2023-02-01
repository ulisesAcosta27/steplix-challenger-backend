import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "mysql",
  port: 3306,
  host: "localhost",
  database: "steplix-db",
  username: "steplix",
  password: "root",
});

export default db;
