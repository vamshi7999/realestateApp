import  express from "express";
import {test} from "../controllers/user.controller.js"
import {signUp} from '../controllers/auth.controller.js'

const router= express.Router();
router.get('/test',test)
router.post("/auth/signup",signUp)

export default router