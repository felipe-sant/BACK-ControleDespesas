import { Router, Request, Response } from 'express';
import expenses from './expenses';

const routes = Router();

routes.use("/", expenses)

routes.use((_: Request, res: Response) => {
    res.status(404).json({ message: "Not Found" })
})

export default routes;