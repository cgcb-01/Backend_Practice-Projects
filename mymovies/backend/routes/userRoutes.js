import express from "express";
//controllers
import { createUser } from "../controllers/userControllers.js";
//middlwares
const router = express.Router();
router.route("/").post(createUser);

export default router;
