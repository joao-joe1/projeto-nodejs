import { Request, Response } from "express";
import { ListSenderReceiverCompliment } from "../services/ListSenderComplimentService";

class GetSenderCompliment {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listSenderComplimentService = new ListSenderReceiverCompliment();
        const listCompliment = await listSenderComplimentService.execute({ id: user_id });
        return response.status(200).json({ listCompliment })
    }
}

export { GetSenderCompliment }