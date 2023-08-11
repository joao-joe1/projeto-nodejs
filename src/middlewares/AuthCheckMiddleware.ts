import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";


export function isAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization as string

    if (!authToken) {
        response.status(401).json({
            error: 'Acesso não autorizado. Token de autenticação inválido ou ausente.'
        })
    }

    const token = authToken.split(' ')[1]

    try {
        const decodedToken = verify(token, 'a3e30a5fa0bc7e36c614d0a072e712e7')
        next();
    } catch (error) {
        return response.status(401).json({
            error: 'Acesso não autorizado. Token de autenticação inválido.'
        })
    }

    next();
}