import { Request, Response } from "express";
import { ListReceiverReceiverCompliment } from "../services/ListReceiverComplimentService";

class GetReceiverController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listReceiverCompliment = new ListReceiverReceiverCompliment();
        const getReceiverCompliment = listReceiverCompliment.execute({ id: user_id });
        return response.status(200).json({ getReceiverCompliment })
    }
}

export { GetReceiverController }