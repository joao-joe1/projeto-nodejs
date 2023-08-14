import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


interface IComplimentSenderRequest {
    id: string,
}

class ListSenderReceiverCompliment {
    async execute({ }) {

    }
}

export { ListSenderReceiverCompliment }