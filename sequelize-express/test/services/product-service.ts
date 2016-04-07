/* tslint:disable:no-require-imports */

import {expect} from "chai";
import {sequelize} from "../../src/models/index";
import {ProductInstance} from "../../src/models/interfaces/product-interface";
import {ProductService} from "../../src/services/product-service";

const delay = 500;

describe("ProductService", () => {
  const productAttributes = {
    name: "product1",
    description: "Description of product1."
  };

  describe("#createProduct", () => {
    let productService: ProductService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/product-service");
          productService = service.productService;
          done();
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should create a product in the database correctly", () => {
      productService.createProduct(productAttributes).then((product: ProductInstance) => {
        expect(product.dataValues.name).to.equals(productAttributes.name);
        expect(product.dataValues.description).to.equals(productAttributes.description);
      }).catch((error: Error) => {
        throw error;
      });
    });
  });

  describe("#retrieveProduct(s)", () => {
    let productService: ProductService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/product-service");
          productService = service.productService;
          productService.createProduct(productAttributes).then((product: ProductInstance) => {
            done();
          }).catch((error: Error) => {
            done(error);
          });
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should retrieve a product from the database correctly", () => {
      productService.retrieveProduct(productAttributes.name).then((product: ProductInstance) => {
        expect(product.dataValues.name).to.equals(productAttributes.name);
        expect(product.dataValues.description).to.equals(productAttributes.description);
      }).catch((error: Error) => {
        throw error;
      });
    });

    it("should retrieve the correct number of products", () => {
      productService.retrieveProducts().then((products: Array<ProductInstance>) => {
        expect(products.length).to.equals(1);
      });
    });
  });

  describe("#updateProduct", () => {
    let productService: ProductService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/product-service");
          productService = service.productService;
          productService.createProduct(productAttributes).then((product: ProductInstance) => {
            done();
          }).catch((error: Error) => {
            done(error);
          });
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should update the product attribute(s) correctly", () => {
      let updateAttributes = {
        description: "Update description of product1."
      };
      productService.updateProduct(productAttributes.name, updateAttributes).then(() => {
        productService.retrieveProduct(productAttributes.name).then((product: ProductInstance) => {
          expect(product.dataValues.name).to.equals(productAttributes.name);
          expect(product.dataValues.description).to.equals(updateAttributes.description);
        }).catch((error: Error) => {
          throw error;
        });
      }).catch((error: Error) => {
        throw error;
      });
    });
  });

  describe("#deleteProduct", () => {
    let productService: ProductService;

    before((done: Function) => {
      setTimeout(() => {
        sequelize.sync().then(() => {
          let service = require("../../src/services/product-service");
          productService = service.productService;
          productService.createProduct(productAttributes).then((product: ProductInstance) => {
            done();
          }).catch((error: Error) => {
            done(error);
          });
        }).catch((error: Error) => {
          done(error);
        });
      }, delay);
    });

    it("should delete the product from the database correctly", () => {
      productService.deleteProduct(productAttributes.name).then(() => {
        productService.retrieveProduct(productAttributes.name).then((product: ProductInstance) => {
          expect(product).to.be.null;
        }).catch((error: Error) => {
          throw error;
        });
      }).catch((error: Error) => {
        throw error;
      });
    });
  });
});
