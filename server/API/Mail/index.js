// Library
import express from "express";
import mailgun from "mailgun-js";

// config
import { initializeMailgun } from "../../config/mail.config";

const Router = express.Router();