import mongoose from "mongoose";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../../error.js";
import  jwt from "jsonwebtoken";

export const signin= async (req, res, next)=>{
    
    try{
       const {username, password} = req.body;
       if(!username || !password) next(createError(404, "Please fill all the necessary details!"));

       const user=await User.findOne({username});
       if(!user) next(createError(404, "Invalid Credentials!"));
       else{
         const isCorrectPassword = await bcrypt.compare(password, user.password);
         if (!isCorrectPassword) next(createError(404, "Invalid Credentials!"));
         else{
          console.log("correct password");
           const {password, ...others}=user._doc;
           const token = jwt.sign({ id: user._id }, process.env.JWTTOKENKEY);
           
           res
             .cookie("access_token", token, {
               httpOnly: true
             })
             .status(200)
             .json(others);
         }
       }

    }catch(err){
        next(err);
    };
}