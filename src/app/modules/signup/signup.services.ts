import envData from "../../config/config";
import { TsignUp } from "./signup.interface";
import { signUpModel } from "./signup.model";
import jwt from 'jsonwebtoken';



export const signupService = async (payload: TsignUp) => {
      
    const checkUserExistancy = await signUpModel.findOne({ email: { $eq: payload.email } })
    
     if (checkUserExistancy) {
         throw new Error('this user already exist please use unique email')
    }  
     const insertUser = await signUpModel.create(payload)
     
     if (insertUser) {
          const accessToken = jwt.sign(payload, envData.secretKey as string, { expiresIn: '2d' });
          return accessToken 
     }
        
     
    
}