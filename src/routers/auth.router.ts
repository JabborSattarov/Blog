import { Router } from "express";
import {signIn, signUp} from "../controllers/auth.Controller"

export const authRouter = Router();

authRouter.post(`/sign_up`, signUp)
authRouter.post(`/sign_in`, signIn)


