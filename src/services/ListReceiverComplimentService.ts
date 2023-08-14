import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface IComplimentReceiverRequest {
    id: string,
}

class ListReceiverReceiverCompliment {
    async execute({ id }: IComplimentReceiverRequest) {

        const receiverCompliment = prisma.compliments.findMany({
            where: {
                user_sender: id
            },
            include: {
                sender: true,
                fktag_id: true,
            }
        })

        return receiverCompliment
    }
}

export { ListReceiverReceiverCompliment }