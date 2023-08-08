import { Prisma, PrismaClient } from "@prisma/client"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface InterfaceAuthRequest {
    email: string,
    password: string,
}

const prisma = new PrismaClient()

class CreateAuthUserService {

    async execute({ email, password }: InterfaceAuthRequest) {
        //1° Verificar se email existe.
        const userExists = await prisma.users.findUnique({
            where: {
                email: email
            }
        })
        if (!userExists) {
            throw new Error("Credenciais inválidas.")
        }
        //2° Verificar se a senha está correta
        const passwordCompare = await compare(password, userExists.password)
        if (!passwordCompare) {
            throw new Error("Credenciais inválidas.")
        }

        //3° Gerar um token
        const token = sign({
            email: userExists.email
        }, "8b539232a780cc04485574f87e73443e", {
            subject: userExists.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { CreateAuthUserService }