import { PrismaClient } from "@prisma/client"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import dotenv from 'dotenv';
dotenv.config();


interface IAuthRequest {
    email: string,
    password: string,
}

const prisma = new PrismaClient()
const JWT_Secret = process.env.JWT_SECRET as string

class CreateAuthUserService {

    async execute({ email, password }: IAuthRequest) {
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
        const token = sign(
            { email: userExists.email },
            JWT_Secret,
            {
                subject: userExists.id,
                expiresIn: "1d"
            }
        )

        return token
    }
}

export { CreateAuthUserService }