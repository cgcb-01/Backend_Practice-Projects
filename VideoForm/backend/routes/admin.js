import express from "express";
import { chooseSubmission } from "../controllers/adminController.js";
import { authMiddleware, adminMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Protect routes
router.post("/choose", authMiddleware, adminMiddleware, chooseSubmission);

export default router;
