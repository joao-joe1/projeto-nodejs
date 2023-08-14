import { Request, Response } from "express";
import { ListReceiverCompliment } from "../services/ListReceiverComplimentService";

class GetReceiverController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listReceiverCompliment = new ListReceiverCompliment();
        const getReceiverCompliment = await listReceiverCompliment.execute({ id: user_id });
        return response.status(200).json({ getReceiverCompliment })
    }
}

export { GetReceiverController }