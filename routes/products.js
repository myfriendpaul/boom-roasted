import { Router } from "express";
import * as controllers from "../controllers/products"

const router = Router()

router.get("/products", controllers.getProducts)



export default router