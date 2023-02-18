import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import signInRoute from "./routes/authentication/signin.js";
import signUpRoute from "./routes/authentication/signup.js";
import googleRoute from "./routes/authentication/googleauth.js";
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();


const MONGO_URL=process.env.MONGO_URL;
const PORT = process.env.PORT || 5001;


// Connection to database
const connection = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connected to DB!");
    }).catch((err)=>{
        console.log(`Error Not connected! ${err}`);
    })
}


//Routes for app
app.use(cookieParser());
app.use(express.json()); 
app.use("/api/signin", signInRoute);
app.use("/api/signup", signUpRoute);
app.use("/api/google", googleRoute);


//middleware for handling error
app.use((err, req, res, next)=>{
   const status=err.status || "500";
   const message=err.message || "Something went wrong";
   return res.status(status).json({
    succcess:false,
    status,
    message
   })
})

// Connection to server on Port
app.listen(PORT, ()=>{
    connection();
    console.log("connected to Server!");
})