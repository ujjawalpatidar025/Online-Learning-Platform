import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    fullname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    institute:{
        type: String,
        required: true,
    },
    graduation:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    img:{
        type: String,
    }
}, {timestamps: true});

export const User = mongoose.model("User", UserSchema);