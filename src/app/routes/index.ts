import { Router } from 'express'
import { MessageRoute } from './MessageRoute'

const routes = Router();

routes.use('/messages', MessageRoute);

export { routes };