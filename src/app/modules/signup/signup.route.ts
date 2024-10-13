import { Router } from "express";
import { getsingleUserController, signupController, updateUserController } from "./signup.controller";
import { aunthentication } from "../../middleWare/Authentication";

export const signupRoute = Router()

signupRoute.post('/signup', signupController)

signupRoute.get('/get-user', aunthentication, getsingleUserController),
    
signupRoute.patch(`/update-user/:id`, aunthentication, updateUserController)

