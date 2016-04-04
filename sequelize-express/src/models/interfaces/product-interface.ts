import {Instance} from "sequelize";

export interface ProductAttributes {
  name: string;
  description: string;
}

export interface ProductInstance extends Instance<ProductAttributes> {
  dataValues: ProductAttributes;
}
