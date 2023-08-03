import { Response, Request, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Verificar se usuario é um administrador antes de prosseguir.
    const admin = true;

    if (admin) {
        return next()
    }

    return response.status(401).json({
        error: 'Não autorizado.'
    })
}