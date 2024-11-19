import mongoose from "mongoose";

const Expenses = new mongoose.Schema({
    description: { type: String, required: false },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }
})

export default mongoose.model('Expenses', Expenses)