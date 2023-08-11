import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController';
import { CreateAuthUserController } from './controllers/CreateAuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { verifyAdminStatus } from './middlewares/AdminCheckMiddleware';
import { isAuthenticated } from './middlewares/AuthCheckMiddleware'

const router = Router()
const createUserController = new CreateUserController();
const createAuthUserController = new CreateAuthUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle)
router.post('/tags', isAuthenticated, verifyAdminStatus, createTagController.handle)
router.post('/login', createAuthUserController.handle)
router.post('/compliments', createComplimentController.handle)

export { router }