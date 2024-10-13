import { Router } from "express";
import { signInController } from "./signin.controller";

export const signInRoute = Router()

signInRoute.post('/signin',signInController)