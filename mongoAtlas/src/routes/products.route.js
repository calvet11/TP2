import ProductsController from "../controllers/products.controller.js";
import express from 'express';

class Router {
    constructor() {
      this.router = express.Router();
      this.controller = new ProductsController();
    }
  
    start() {
      this.router.get("/products", this.controller.getProducts);
      this.router.get("/products/bsas", this.controller.getProductsBsAs);
      this.router.get("/products/miami", this.controller.getProductsMiami);
      this.router.get("/products/:id", this.controller.getProductsById);
      this.router.post("/products", this.controller.postProduct);
      this.router.delete("/products/:id", this.controller.deleteProduct);
      this.router.put("/products/:id", this.controller.updateProduct);

      return this.router;
    }
  }
  
  export default Router;