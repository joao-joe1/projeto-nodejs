import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export async function verifyAdminStatus(request: Request, response: Response, next: NextFunction) {
    // Verificar se usuario é um administrador antes de prosseguir.
    const { user_id } = request;
    try {
        const user = await prisma.users.findUnique({
            where: { id: user_id }
        })
        if (!user) {
            return response.status(401).end()
        }
        if (user.admin) {
            return next();
        }
        return response.status(401).json({
            error: 'Não autorizado. Somente administradores podem acessar esta rota.'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            error: 'Erro ao verificar status de administrador.'
        })
    }

}