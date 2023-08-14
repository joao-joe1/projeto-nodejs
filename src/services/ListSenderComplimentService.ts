import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


interface IComplimentSenderRequest {
    id: string,
}

class ListSenderReceiverCompliment {

    async execute({ id }: IComplimentSenderRequest) {

        const user = await prisma.users.findUnique({
            where: { id }
        })

        if (!user) {
            throw new Error('ID de usuário inválido ou ausente.')
        }

        const sentCompliments = await prisma.compliments.findMany({
            where: {
                user_sender: id
            },
            include: {
                receiver: true,
                fktag_id: true,
            }
        })

        return sentCompliments;
    }
}

export { ListSenderReceiverCompliment }