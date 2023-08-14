import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


interface IComplimentSenderRequest {
    id: string,
}

class ListSenderReceiverCompliment {

    async execute({ id }: IComplimentSenderRequest) {

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