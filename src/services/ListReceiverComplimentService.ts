import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface IComplimentReceiverRequest {
    id: string,
}

class ListReceiverReceiverCompliment {
    async execute({ id }: IComplimentReceiverRequest) {

    }
}

export { ListReceiverReceiverCompliment }