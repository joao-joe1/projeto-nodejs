import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

interface InterfaceTagRequest {
    name: string,
}

class CreateTagService {
    async execute({ name }: InterfaceTagRequest) {

        if (!name) {
            throw Error("Nome incorreto!")
        }

        const tagAlreadyExists = await prisma.tags.findFirst({
            where: {
                name: name
            }
        })

        if (tagAlreadyExists) {
            throw Error("Essa tag já existe!")
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