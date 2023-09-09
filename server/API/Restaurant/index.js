// Library
import express from "express";
import passport from "passport";

// Models
import { RestaurantModel } from "../../database/allModels";

// validation
import { ValidateRestaurantCity, ValidateSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router = express.Router();

/*
Route       /
Des         Get all the restaurant details based on city
Params      none
Access      Public
Method      GET
*/

Router.get("/", async (req, res) => {
    try {
        await ValidateRestaurantCity(req.query);

        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
});

/*
Route       /
Des         Get individual restaurant details based on id
Params      id
Access      Public
Method      GET
*/

Router.get("/:_id", async (req, res) => {
    try {
        await ValidateRestaurantId(req.params);

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById({ _id }); 
        if(!restaurant){
            return res.status(404).json({ error: "Restaurant Not found"});
        }
        
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /
Des         Get restaurant details based on search string
Params      none
Access      Public
Method      GET
*/

Router.get("/search", async (req, res) => {
    try {
        await ValidateSearchString(req.body);
        
        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({ name: { $regex: searchString, $options: "i"}});
        if(!restaurants){
            return res.status(404).json({ error: `Restaurant for ${searchString} Not found`});
        }

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
/*
Route       /new
Des         Post new restaurant
Params      none
Access      Public
Method      POST
*/

Router.post("/new", async (req, res) => {
    try {
        const newRestaurant = await RestaurantModel.create(req.body.restaurantData);
        return res.json({ restaurants: newRestaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /update
Des         Update restaurant
Params      none
Access      Public
Method      POST
*/

Router.post("/update", passport.authenticate("jwt"),async (req, res) => {
    try {
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
            req.body.restaurantData._id,
            { $set: req.body.restaurantData },
            { new: true }
        );
        if(!updatedRestaurant)
            return res.status(404).json({ restaurants: "Restaurant Not Found !!!" });
            
        return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



export default Router;