// Library
import express from "express";
import passport from "passport";

// Models
import { ImageModel, MenuModel } from "../../database/allModels";



const Router = express.Router();

/*
Route       /list
Des         Get all menu list based on id
Params      _id
Access      Public
Method      GET
*/

Router.get("/list/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menu = await MenuModel.findOne(_id);

        return res.json({ menu });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

/*
Route       /image
Des         Get all menu image based on id
Params      _id
Access      Public
Method      GET
*/

Router.get("/image/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const menuImages = await ImageModel.findOne(_id);

        return res.json({ menuImages });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

export default Router;