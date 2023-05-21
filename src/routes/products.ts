import { Router } from "express";
import { getProduct, getProducts, postProduct, putProduct, deleteProduct } from "../controller/products";

const router = Router()

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',postProduct)
router.put('/:id',putProduct)
router.delete('/:id',deleteProduct)

export{router}