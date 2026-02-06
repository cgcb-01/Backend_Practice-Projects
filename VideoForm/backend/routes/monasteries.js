import express from "express";
import {
  searchMonasteries,
  getMonasterySubmissions,
} from "../controllers/monasteryController.js";

const router = express.Router();

// Search monasteries (shows chosen videos)
router.get("/", searchMonasteries);

// Get one monastery + its submissions
router.get("/:id", getMonasterySubmissions);

export default router;
