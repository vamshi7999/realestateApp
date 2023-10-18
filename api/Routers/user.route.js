import  express from "express";
import {test} from "../controllers/user.controller.js"
import {signUp} from '../controllers/auth.controller.js'

const router= express.Router();
router.get('/test',test)
router.post("/sign-up",signUp)

export default router