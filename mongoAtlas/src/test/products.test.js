import generator from "./generator.js";
import { expect } from "chai";
import supertest from "supertest";

//siempre declaramos la ip
const request = supertest("http://127.0.0.1:8080");

describe("Test con Faker", () => {
  it("Obtener datos con Faker", () => {
    const data = generator.randomProduct();
    expect(data);
  });

  describe("Testeo endpoints", () => {
    it("GET", async () => {
      const response = await request.get("/products");
      expect(response.status).to.eq(200);
    });
    it("GET /products/bsas", async () => {
      const response = await request.get("/products/bsas");
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });

    it("GET /products/miami", async () => {
      const response = await request.get("/products/miami");
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });

    it("GET /products/:id", async () => {
      const id = 1; 
      const response = await request.get(`/products/${id}`);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("object");
    });
  });
});
