import express from "express";
//controllers
//middlwares
const router = express.Router();
router.route("/").post(createUser);

export default router;
