import { Request, Response } from "express";
import { ListTagsCompliment } from "../services/ListTagsCompliment";

class GetTagsController {
    async handle(request: Request, response: Response) {
        const listTagsCompliment = new ListTagsCompliment();
        const getListTags = await listTagsCompliment.execute();
        return response.status(200).json({ getListTags })
    }
}

export { GetTagsController }