import express from "express";
//controllers
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "../controllers/userControllers.js";
//middlwares
import {
  authenticateUser,
  authorizeAdmin,
} from "../middlewares/authMiddleware.js";

const router = express.Router();
router
  .route("/")
  .post(createUser)
  .get(authenticateUser, authorizeAdmin, getAllUsers);

router
  .route("/profile")
  .get(authenticateUser, getCurrentUserProfile)
  .put(authenticateUser, updateCurrentUserProfile);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);
export default router;
