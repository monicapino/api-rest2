import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

export class ProductsController {

    index(request: Request, response: Response) {
        const { page, limit } = request.query
        
        response.send(`Página ${page} - Limite ${limit}`)
    }

    create(request: Request, response: Response) {
        const { name, price } = request.body 

        if (!name){
            throw new AppError ("Nome do produto")
        }

       // throw new Error("Erro de teste")
       // throw new AppError("Erro de teste", 401)

        response.status(201).json({ name, price, user_id: request.user_id })
    }
} 