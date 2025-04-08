import express from "express";
import productRouter from "../modules/products/productRouter";
const router = express.Router();

router.use("/products", productRouter);

export default router;
