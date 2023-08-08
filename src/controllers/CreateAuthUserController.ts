import { Response, Request } from "express"
import { CreateAuthUserService } from "../services/AuthUserService"


class CreateAuthUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        const createAuthUserService = new CreateAuthUserService();
        const token = await createAuthUserService.execute({ email, password });
        return response.status(201).json({ token })
    }
}

export { CreateAuthUserController }