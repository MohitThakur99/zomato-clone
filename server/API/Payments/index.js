// Library
import express from "express";
import passport from "passport";
import RazorPay from "razorpay";
import { v4 as uuid } from "uuid";

const Router = express.Router();

/*
Route       /
Des         Get all orders based on id
Params      _id
Access      Public
Method      POST
*/
Router.post("/new", async (req, res) => {
    try {
        const instance = new RazorPay({ 
            key_id: process.env.RZR_PAY_ID, 
            key_secret: process.env.RZR_PAY_SECRET 
        })
        const order = await instance.orders.create({
            amount: req.body.amount*100,
            currency: "INR",
            receipt: `${uuid()}`,
            notes: {
            key1: "value3",
            key2: "value2"
        }})
        return res.json({ order });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

export default Router;