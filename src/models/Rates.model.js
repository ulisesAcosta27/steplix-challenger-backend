import db from "../database.js";
import { DataTypes } from "sequelize";
import { Currencies } from "./Currencies.model.js";

export const Rates = db.define("rates", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


Currencies.hasOne(Rates, {
  foreignKey: 'id_currency',
  sourceKey: 'id'
})

Rates.belongsTo(Currencies, {
  foreignKey: 'id_currency',
  sourceKey: 'id'
})