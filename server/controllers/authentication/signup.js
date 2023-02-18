import mongoose from "mongoose";
import { User } from "../../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../../error.js";

export const signup= async (req, res, next)=>{
    
    try{
        const {fullname, username, email, institute, graduation, password} = req.body;
        if(!fullname || !username || !email || !institute || !graduation || !password) next(createError(404, "Please fill all the necessary details!"));
        else{
          const hash = bcrypt.hashSync(req.body.password, 12);
          const newUser = new User({ ...req.body, password: hash });
          await newUser.save();
          res.status(200).send("User has been created");
        }
    }catch(err){
        next(err);
    };
}