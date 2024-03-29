// Library
import express from "express";
import passport from "passport";

// Models
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route       /
Des         Get user data
Params      _id
Body        none
Access      Public
Method      GET
*/

Router.get("/", passport.authenticate("jwt") ,async (req, res) => {
    try {
        const { email,fullname,phoneNumber,address } = req.session.passport.user._doc;

        return res.json({ user: { email,fullname,phoneNumber,address } });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

/*
Route       /:_id
Des         Get user data
Params      _id
Body        none
Access      Public
Method      GET
*/

Router.get("/:_id",async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user;

        return res.json({ user: { fullname } });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

/*
Route       /update/:_id
Des         update user data
Params      _id
Body        user data
Access      Public
Method      PUT
*/

Router.put("/update/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const { userData } = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(userId, { $set: userData}, { new: true });

        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

export default Router;

