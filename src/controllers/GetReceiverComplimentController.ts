import { Request, Response } from "express";
import { ListReceiverReceiverCompliment } from "../services/ListReceiverComplimentService";

class GetReceiverController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listReceiverReceiverCompliment = new ListReceiverReceiverCompliment();
    }
}

export { GetReceiverController }