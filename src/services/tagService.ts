import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

interface InterfaceTagRequest {
    name: string,
}

class CreateTagService {
    async execute({ name }: InterfaceTagRequest) {

        if (!name) {
            throw Error("Nome incorreto! Certifique-se de fornecer um nome válido para a tag.")
        }

        const tagAlreadyExists = await prisma.tags.findFirst({
            where: {
                name: name
            }
        })

        if (tagAlreadyExists) {
            throw Error("Essa tag já existe! Escolha um nome único para a tag.")
        }

        const createTag = await prisma.tags.create({
            data: {
                name
            }
        })

        return createTag
    }
}

export { CreateTagService }