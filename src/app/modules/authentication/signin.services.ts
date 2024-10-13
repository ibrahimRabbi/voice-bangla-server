import envData from "../../config/config";
import { signUpModel } from "../signup/signup.model";
import { TsignIn } from "./signin.interface";
import jwt from "jsonwebtoken";

export const signInService = async (payload:TsignIn) => {
    const checkExistancy = await signUpModel.findOne({ email: { $eq: payload.email } })

    
    if (!checkExistancy) {
        throw new Error('user is not exist')
    }

    if (checkExistancy.password !== payload.password) {
        throw new Error('invalid password')
    }

    if (checkExistancy.isDeleted) {
        throw new Error('unthorized user')
    }

    const accessToken = jwt.sign({ ...payload, role: checkExistancy.role }, envData.secretKey as string, { expiresIn: '2d' })
    return accessToken
}