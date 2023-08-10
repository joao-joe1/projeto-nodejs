import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface InterfaceComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}


class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: InterfaceComplimentRequest) {

        if (user_receiver === user_sender) {
            throw new Error("O remetente e o destinatário não podem ser os mesmos usuários.")
        }

        const userReceiverExists = await prisma.users.findUnique({
            where: { id: user_receiver }
        })

        if (!userReceiverExists) {
            throw new Error("O destinatário do elogio é inválido ou não existe.")
        }

        const compliment = await prisma.compliments.create({
            data: {
                tag_id,
                user_sender,
                user_receiver,
                message
            }
        })

        return compliment
    }
}

export { CreateComplimentService }