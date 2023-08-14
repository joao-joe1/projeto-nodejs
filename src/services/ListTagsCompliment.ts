import { PrismaClient } from "@prisma/client";
import { Expose, classToPlain } from "class-transformer";

const prisma = new PrismaClient();

class TagCompliment {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;

    constructor(tag: { id: string; name: string; created_at: Date; updated_at: Date }) {
        this.id = tag.id;
        this.name = tag.name;
        this.created_at = tag.created_at;
        this.updated_at = tag.updated_at;
    }

    @Expose({ name: "customName" })
    customName(): string {
        return `#${this.name}`;
    }
}

class ListTagsCompliment {
    async execute() {
        const tagsCompliment = await prisma.tags.findMany();
        const exposedTags = tagsCompliment.map(tag => new TagCompliment(tag));
        return classToPlain(exposedTags)
    }
}

export { ListTagsCompliment };
