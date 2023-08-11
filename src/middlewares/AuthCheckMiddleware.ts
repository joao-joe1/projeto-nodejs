import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";


export function isAuthenticated(request: Request, response: Response, next: NextFunction) {

    const JWT_Secret = process.env.JWT_SECRET as string
    const authToken = request.headers.authorization as string

    if (!authToken) {
        response.status(401).json({
            error: 'Acesso não autorizado. Token de autenticação inválido ou ausente.'
        })
    }

    const token = authToken.split(' ')[1]

    try {
        const decodedToken = verify(token, JWT_Secret)
        next();
    } catch (error) {
        return response.status(401).json({
            error: 'Acesso não autorizado. Token de autenticação inválido.'
        })
    }

    next();
}