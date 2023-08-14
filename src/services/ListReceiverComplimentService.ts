import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface IComplimentReceiverRequest {
    id: string,
}

class ListReceiverCompliment {
    async execute({ id }: IComplimentReceiverRequest) {

        const receiverCompliment = await prisma.compliments.findMany({
            where: {
                user_receiver: id
            },
            include: {
                sender: true,
                fktag_id: true,
            }
        })

        return receiverCompliment
    }
}

export { ListReceiverCompliment }