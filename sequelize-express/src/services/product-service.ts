import {logger} from "../utils/logger";
import {models, sequelize} from "../models/index";
import {ProductAttributes, ProductInstance} from "../models/interfaces/product-interface";
import {Transaction} from "sequelize";

export class ProductService {
  createProduct(productAttributes: ProductAttributes): Promise<ProductInstance> {
    let promise = new Promise<ProductInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Product.create(productAttributes).then((product: ProductInstance) => {
          logger.info(`Created product with name ${productAttributes.name}.`);
          resolve(product);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrieveProduct(name: string): Promise<ProductInstance> {
    let promise = new Promise<ProductInstance>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Product.findOne({where: {name: name}}).then((product: ProductInstance) => {
          if (product) {
            logger.info(`Retrieved product with name ${name}.`);
          } else {
            logger.info(`Product with name ${name} does not exist.`);
          }
          resolve(product);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  retrieveProducts(): Promise<Array<ProductInstance>> {
    let promise = new Promise<Array<ProductInstance>>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Product.findAll().then((products: Array<ProductInstance>) => {
          logger.info("Retrieved all products.");
          resolve(products);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  updateProduct(name: string, productAttributes: any): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Product.update(productAttributes, {where: {name: name}})
          .then((results: [number, Array<ProductInstance>]) => {
          if (results.length > 0) {
            logger.info(`Updated product with name ${name}.`);
          } else {
            logger.info(`Product with name ${name} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }

  deleteProduct(name: string): Promise<void> {
    let promise = new Promise<void>((resolve: Function, reject: Function) => {
      sequelize.transaction((t: Transaction) => {
        return models.Product.destroy({where: {name: name}}).then((afffectedRows: number) => {
          if (afffectedRows > 0) {
            logger.info(`Deleted product with name ${name}`);
          } else {
            logger.info(`Product with name ${name} does not exist.`);
          }
          resolve(null);
        }).catch((error: Error) => {
          logger.error(error.message);
          reject(error);
        });
      });
    });

    return promise;
  }
}

export const productService = new ProductService();
