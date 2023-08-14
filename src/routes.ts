import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController';
import { CreateAuthUserController } from './controllers/CreateAuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { GetSenderController } from './controllers/GetSenderController'
import { GetReceiverController } from './controllers/GetReceiverController';
import { verifyAdminStatus } from './middlewares/AdminCheckMiddleware';
import { isAuthenticated } from './middlewares/AuthCheckMiddleware'
import { GetTagsController } from './controllers/GetTagsController';

const router = Router()
const createUserController = new CreateUserController();
const createAuthUserController = new CreateAuthUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const getSenderCompliment = new GetSenderController();
const getReceiverController = new GetReceiverController();
const getTagsController = new GetTagsController();

// Posts
router.post('/users', createUserController.handle)
router.post('/login', createAuthUserController.handle)
router.post('/tags', isAuthenticated, verifyAdminStatus, createTagController.handle)
router.post('/compliments', isAuthenticated, createComplimentController.handle)

// Gets
router.get('/senders', isAuthenticated, getSenderCompliment.handle)
router.get('/receivers', isAuthenticated, getReceiverController.handle)
router.get('/tags', isAuthenticated, getTagsController.handle)

export { router }