import { NextFunction, Request, Response } from 'express';

export function myMiddleware(
    request: Request, 
    response: Response, 
    next: NextFunction 
) {
    request.user_id = "123456"

    console.log('passou pelo Middleware, executed ')

    return next()
}

