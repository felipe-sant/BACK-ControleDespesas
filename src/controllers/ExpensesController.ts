import { Request, Response } from 'express';
import ExpenseType from '../types/expensesType';
import Expenses from '../models/Expenses';

export default class ExpensesController {
    public async create(req: Request, res: Response) {
        try {
            const { description, amount, date } = req.body as ExpenseType;
            const newExpenses = new Expenses({ description, amount, date });
            await newExpenses.save();
            res.status(201).json({ message: 'Expense created' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async index(_: Request, res: Response) {
        try {
            const expenses = await Expenses.find();
            res.status(200).json(expenses as ExpenseType[]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { description, amount, date } = await Expenses.findById(id) as ExpenseType;
            res.status(200).json({ description, amount, date });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { description, amount, date } = req.body as ExpenseType;
            await Expenses.findByIdAndUpdate(id, { description, amount, date });
            res.status(200).json({ message: 'Expense updated' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await Expenses.findByIdAndDelete(id);
            res.status(200).json({ message: 'Expense deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}