import express from "express";
import { getMonasterySubmissions } from "../controllers/monasteryController.js";

const router = express.Router();

router.get("/:id", getMonasterySubmissions);

export default router;
