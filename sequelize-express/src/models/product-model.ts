/* tslint:disable:variable-name */

import * as SequelizeStatic from "sequelize";
import {DataTypes, Sequelize} from "sequelize";
import {ProductAttributes, ProductInstance} from "./interfaces/product-interface";

export default function(sequelize: Sequelize, dataTypes: DataTypes):
  SequelizeStatic.Model<ProductInstance, ProductAttributes> {
  let Product = sequelize.define<ProductInstance, ProductAttributes>("Product", {
    name: {type: dataTypes.STRING, allowNull: false, primaryKey: true},
    description: {type: dataTypes.TEXT, allowNull: true}
  }, {
    indexes: [],
    classMethods: {},
    timestamps: false
  });

  return Product;
}
