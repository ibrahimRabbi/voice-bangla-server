import { NextFunction, Request, Response } from "express";
import { signUpModel } from "./signup.model";
import { signupService } from "./signup.services";

export const signupController = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const insertUserAndGetToken = await signupService(req.body)  
        res.status(200).json({ success: true, status: 200, accessToken:insertUserAndGetToken})
    } catch (err: any) {
       next({statusCode:401,err})
    }
}


export const getsingleUserController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const getUser = await signUpModel.findOne({email:req.user?.email})
        res.status(200).json({ success: true, status: 200, response:getUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    delete data.id
    
    try {
        const updateUser = await signUpModel.findByIdAndUpdate(req.params?.id, data)
        console.log(updateUser)
        res.status(200).json({ success: true, status: 200, response: updateUser })
    } catch (err: any) {
        next({ statusCode: 401, err })
    }
}


