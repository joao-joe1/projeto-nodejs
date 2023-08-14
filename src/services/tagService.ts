import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

interface ITagRequest {
    name: string,
}

class CreateTagService {
    async execute({ name }: ITagRequest) {

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