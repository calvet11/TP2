import ModelFactory from "../models/DAO/Factory.js";
import config from "../../config.js";

class ProductsServices {
    constructor() {
      this.model = ModelFactory.get(config.PERSISTENCE);
    }
  
    getProducts = async () => {
      const products = await this.model.getProducts();
      return products;
  };
  
   getProductsBsAs = async () => {
      const productsBsAs = await this.model.getProductsBsAs();
      return productsBsAs;
  };
  
   getProductsMiami = async () => {
      const productsMiami = await this.model.getProductsMiami();
      return productsMiami;
    };
  
    getProductsById = async (id) => {
      const prod = await this.model.getProductsById(id)
      return prod
    };

    postProduct = async (prod) => {
      const product = await this.model.postProduct(prod)
      return product
    };

    deleteProduct = async (id) => {
      await this.model.deleteProduct(id);
    }

    updateProduct = async (id, product) => {
      await this.model.updateProduct(id, product);
    }
  }
  
  export default ProductsServices;