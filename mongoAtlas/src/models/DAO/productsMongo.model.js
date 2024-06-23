import { ObjectId } from "mongodb";
import MongoConnection from "../MongoConnection.js"

class ProductsModelMongoDB {
  constructor() {

  }

  getProducts = async () => {
    const products = await MongoConnection.db.collection("products").find({}).toArray()
    return products;
  };

  getProductsBsAs = async () => {
    const products = await MongoConnection.db.collection("products").find({}).toArray()
    const productBsAs = JSON.parse(JSON.stringify(products))
    if (await tempArg() < 20) {
      productBsAs.forEach(prod => {
        if (prod.esParaFrio == true) {
          prod.precio = prod.precio * 2
        }
      });
    } else {
      productBsAs.forEach(prod => {
        if (prod.esParaCalor == true) {
          prod.precio = prod.precio * 2
        }
      });
    }
    return productBsAs;
  };

  getProductsMiami = async () => {
    const products = await MongoConnection.db.collection("products").find({}).toArray()
    const productMiami = JSON.parse(JSON.stringify(products))
    if (await tempMiami() < 20) {
      productMiami.forEach(prod => {
        if (prod.esParaFrio == true) {
          prod.precio = prod.precio * 2
        }
      });
    } else {
      productMiami.forEach(prod => {
        if (prod.esParaCalor == true) {
          prod.precio = prod.precio * 2
        }
      });
    }
    return productMiami;
  };

  getProductsById = async (id) => {
    const producto = await MongoConnection.db.collection("products").findOne({ id: parseInt(id) })
    console.log(producto)
    return producto || "Producto inexistente :("
  };

  postProduct = async (prod) => {
    const newProduct = await MongoConnection.db.collection("products").insertOne(prod)
    return newProduct
  };

  deleteProduct = async (id) => {
    await MongoConnection.db.collection("products").deleteOne({ id: parseInt(id) })
  }

  updateProduct = async (id, product) => {
    await MongoConnection.db.collection("products").replaceOne({ id: parseInt(id) }, product)
  }
}
async function tempArg() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&appid=1931722488a4554fc1d7d4830bdceee5&units=metric')
  const data = await response.json()
  const temperatura = data.main.temp
  console.log("la temperatura de Argentina es: " + temperatura)
  return temperatura
}

async function tempMiami() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=25.7742700&lon=-80.1936600&appid=1931722488a4554fc1d7d4830bdceee5&units=metric')
  const data = await response.json()
  const temperatura = data.main.temp
  console.log("la temperatura de Miami es: " + temperatura)
  return temperatura
}




export default ProductsModelMongoDB