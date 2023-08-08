import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController';
import { CreateAuthUserController } from './controllers/CreateAuthUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router()
const createUserController = new CreateUserController();
const createAuthUserController = new CreateAuthUserController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/login', createAuthUserController.handle)

export { router }