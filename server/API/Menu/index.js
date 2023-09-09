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
        const menu = await MenuModel.findById(_id);

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
/*
Route       /menu/new
Des         Post new menu
Params      none
Access      Public
Method      POST
*/

Router.post("/new", async (req, res) => {
    try {
        const { menuData } = req.body;
        if(menuData._id) {
            const updateMenu = await MenuModel.findByIdAndUpdate(
                menuData._id,
                {
                    $push: {
                        menus: { $each: menuData.menus },
                    },
                },
                { new: true }
            );
            return res.json({ menu: updateMenu });
        }
        const createNewMenu = await MenuModel.create(menuData);
        
        return res.json({ menu: createNewMenu });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

export default Router;