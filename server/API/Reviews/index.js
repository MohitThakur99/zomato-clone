// Library
import express from "express";
import passport from "passport";

// Models
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route       /
Des         get food review/rating
Params      restaurantID
Body        review object
Access      Public
Method      GET
*/

Router.get("/:resid", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ restaurant:req.params.resid });

        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

/*
Route       /new
Des         add new food review/rating
Params      none
Body        review object
Access      Public
Method      POST
*/

Router.post("/new",passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;
        const { reviewData } = req.body;

        await ReviewModel.create({ ...reviewData, user:_id });

        return res.json({ review: "Successfully created review" });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

/*
Route       /delete/:_id
Des         add new food review/rating
Params      _id
Body        none
Access      Public
Method      GET
*/

Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully deleted review" });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

export default Router;