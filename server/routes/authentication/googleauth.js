import express from "express";
import {googleAuth} from '../../controllers/authentication/googleauth.js'
const router=express.Router();

router.post("/", googleAuth);
export default router;