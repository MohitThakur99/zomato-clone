import mongoose from "mongoose";

// import env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleConfig from "./config/google.config.js";
import routeConfig from "./config/route.config.js";

// microservice routes
import Auth from "./API/Auth/index.js";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/Orders";
import Menu from "./API/Menu";
import Review from "./API/Reviews";
import User from "./API/User";
import Payments from "./API/Payments";

// Database connection
import ConnectDB from "./database/connection.js";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configuration
googleConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);
zomato.use("/payments", Payments);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

mongoose.connect( process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => zomato.listen(5000, () => {console.log(`Server is running 🚀`)}))
    .catch((err) => console.log("Server is running, but database connection failed..."))
