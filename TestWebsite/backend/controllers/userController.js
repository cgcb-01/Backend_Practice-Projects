import User from "../models/user.js";
import bcrypt from "bcryptjs";
import asyncHandler from "../middlewares/asyncHandler.js";
import createToken from "../utils/createToken.js";
const createUser=asyncHandler(async(req,res)=>
{
    const {username,email,password}=req.body;
    if(!username || !email || !password)
        throw new Error("All fields must be provided")
}
)
export {createUser};