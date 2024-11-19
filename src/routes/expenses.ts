import { Router, Request, Response } from 'express';
import ExpensesController from '../controllers/ExpensesController';

const router = Router();
const controller = new ExpensesController();

router.post("/expenses", controller.create)
router.get("/expenses", controller.index)
router.get("/expenses/:id", controller.show)
router.put("/expenses/:id", controller.update)
router.delete("/expenses/:id", controller.delete)

router.use((_: Request, res: Response) => {
    res.status(404).json({ message: "Not Found" })
})

export default router;