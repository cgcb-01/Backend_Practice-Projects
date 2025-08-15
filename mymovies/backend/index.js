import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

//Files
import connectDB from "./config/db.js";
//configuration
dotenv.config(); //to parse .env into process.env
connectDB();
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.POST || 3000;

//Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
