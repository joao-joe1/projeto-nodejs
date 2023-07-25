import { Request, Response } from "express"
import { CreateUserService } from "../services/userService"

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;
        const createUserService = new CreateUserService()

        try {
            const newUser = createUserService.isEmailAlreadyRegistered({ name, email, admin })
            return response.status(201).json(newUser)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}

export { CreateUserController }