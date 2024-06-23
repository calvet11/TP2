import ProductsServices from "../services/products.service.js";

class ProductsController {
    constructor() {
      this.services = new ProductsServices();
    }

    getProducts = async (req, res) => {
      const products = await this.services.getProducts();
      res.send(products);
    };
  
    getProductsBsAs = async (req, res) => {
        const productsArg = await this.services.getProductsBsAs();
        res.send(productsArg);
  };
  
    getProductsMiami = async (req, res) => {
       const productsMiami = await this.services.getProductsMiami();
       res.send(productsMiami);
      };
  
    getProductsById = async (req, res) => {
      const {id} = req.params
      const prod = await this.services.getProductsById(id)
      res.send(prod)
    };

    postProduct = async (req, res) => {
      const newProduct = req.body
      const prod = await this.services.postProduct(newProduct)
      //Solo el controlador maneja la respuesta del servidor
      res.send(prod)
    };

    deleteProduct = async (req, res) => {
      const id = req.params.id;
      await this.services.deleteProduct(id);
      res.send({})
    }

    updateProduct = async (req, res) => {
      const { id } = req.params;
      const { product } = req.body;

      if (!id || !product) {
        res.status(400).send();
      }

      await this.services.updateProduct(id, product);
      res.status(204).send();
    }
}
  
  export default ProductsController;