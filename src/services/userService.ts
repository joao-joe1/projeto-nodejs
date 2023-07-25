import { PrismaClient } from "@prisma/client"
import { Response } from "express";

interface InterfaceUserRequest {
    name: string,
    email: string,
    admin?: boolean,
}

const prisma = new PrismaClient()

class CreateUserService {

    async isEmailAlreadyRegistered({ name, email, admin }: InterfaceUserRequest) {
        if (!email) {
            throw new Error("Email não existente.")
        }

        const userAlreadyExists = await prisma.users.findFirst({
            where: { // É um objeto que representa as condições de busca para a consulta.
                email: email
            },
        });

        if (userAlreadyExists) {
            throw new Error("Email já cadastrado.")
        }

        const user = await prisma.users.create({
            data: { // Definir as informações do usuário que serão criadas no banco de dados.
                name,
                email,
                admin,
            }
        })

        return user
    }
}

export { CreateUserService, InterfaceUserRequest };