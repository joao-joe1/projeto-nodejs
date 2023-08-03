import { Request, Response } from "express"
import { CreateTagService } from "../services/tagService"

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const createTagService = new CreateTagService;
        const newTag = await createTagService.execute({ name })
        return response.status(201).json({ newTag })
    }
}

export { CreateTagController }