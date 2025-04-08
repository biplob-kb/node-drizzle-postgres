import express from "express";
import productController from "./productController";
const productRouter = express.Router();

productRouter.get("/", productController.getAllProducts);

export default productRouter;
