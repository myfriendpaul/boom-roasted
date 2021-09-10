import { Router } from "express";
import * as controllers from "../controllers/products.js";

const router = Router();

router.get("/products", controllers.getProducts);
router.get("/products/:id", controllers.getProduct);
router.post("/products", controllers.createProduct);

export default router;
