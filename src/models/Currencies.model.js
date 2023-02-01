import db from "../database.js";
import { DataTypes } from "sequelize";

// interface ICurrencies {
//   id?: number;
//   description: string;
//   symbol: string;
// };

// export const Currencies = db.define<Model<ICurrencies>>("currencies", {
export const Currencies = db.define("currencies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

