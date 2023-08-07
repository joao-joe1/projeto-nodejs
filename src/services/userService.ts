import { PrismaClient } from "@prisma/client"
import { hash } from 'bcryptjs'

interface InterfaceUserRequest {
    name: string,
    email: string,
    admin?: boolean,
    password: string,
}

const prisma = new PrismaClient()

class CreateUserService {

    async execute({ name, email, admin, password }: InterfaceUserRequest) {
        if (!email) {
            throw new Error("Email incorreto.")
        }

        const userAlreadyExists = await prisma.users.findFirst({
            where: { // É um objeto que representa as condições de busca para a consulta.
                email: email
            },
        });

        if (userAlreadyExists) {
            throw new Error("Email já cadastrado.")
        }

        const hashedPassword = await hash(password, 8)
        const createUser = await prisma.users.create({
            data: { // Definir as informações do usuário que serão criadas no banco de dados.
                name,
                email,
                admin,
                password: hashedPassword,
            }
        })

        return createUser
    }
}

export { CreateUserService, InterfaceUserRequest };