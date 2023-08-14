import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController';
import { CreateAuthUserController } from './controllers/CreateAuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { GetSenderController } from './controllers/GetSenderCompliment'
import { verifyAdminStatus } from './middlewares/AdminCheckMiddleware';
import { isAuthenticated } from './middlewares/AuthCheckMiddleware'

const router = Router()
const createUserController = new CreateUserController();
const createAuthUserController = new CreateAuthUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const getSenderCompliment = new GetSenderController();

// Posts
router.post('/users', createUserController.handle)
router.post('/login', createAuthUserController.handle)
router.post('/tags', isAuthenticated, verifyAdminStatus, createTagController.handle)
router.post('/compliments', isAuthenticated, createComplimentController.handle)

// Gets
router.get('/senders', isAuthenticated, getSenderCompliment.handle)
router.get('/receivers', isAuthenticated)

export { router }