import { Router } from 'express';
import { myMiddleware } from '../middlewares/myMiddleware'
import { ProductsController } from '../controllers/ProductsController';

export const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
   

productsRoutes.post("/", myMiddleware, productsController.create)





