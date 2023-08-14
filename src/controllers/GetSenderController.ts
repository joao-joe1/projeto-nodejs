import { Request, Response } from "express";
import { ListSenderCompliment } from "../services/ListSenderComplimentService";

class GetSenderController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listSenderComplimentService = new ListSenderCompliment();
        const getSenderCompliment = await listSenderComplimentService.execute({ id: user_id });
        return response.status(200).json({ getSenderCompliment })
    }
}

export { GetSenderController }