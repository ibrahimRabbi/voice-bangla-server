import { model, Schema } from "mongoose";
import { TsignUp } from "./signup.interface";

const divisions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"]

const userSchema = new Schema<TsignUp>({
    name: { type: String, maxlength: 25, required: true, trim: true },
    age: { type: String, max: 120, required: true, trim: true },
    email: { type: String, required: true, unique:true, trim: true },
    password: { type: String, minlength:8, required: true, trim: true },
    phone: { type: String, minlength:11, maxlength: 11, required: true, trim: true },
    gender: { type: String, enum: ['male', 'female', 'others'], required: true, trim: true },
    division: { type: String, enum: divisions , default:'Dhaka', trim: true },
    role: { type: String, enum: ['user', 'admin'], required:true, trim: true },
    profile: { type: String, trim: true, default: 'https://i.ibb.co/jz5bg13/image.jpg' },
    bio: { type: String },
    profession: { type: String},
    sector: { type: String },
    isDeleted : {type:Boolean,default:false}
},
    {timestamps:true}
);

export const signUpModel = model<TsignUp>('users',userSchema)
    