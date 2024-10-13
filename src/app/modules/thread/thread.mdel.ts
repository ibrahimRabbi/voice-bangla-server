import { model, Schema } from "mongoose";
import { Tthread } from "./thread.interface";
const categorys = ['safe and security', 'community', 'emergancy', 'report', 'thread', 'others']
const topics = ['hospitality', 'further details', 'describe issue']


const threadSchema = new Schema<Tthread>({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    category: { type: String, required: true, enum: categorys },
    topic: { type: String, required: true, enum: topics },
    topicDetails: { type: String, required: true },
    comments: { type: Array },
    details: { type: String, required: true },
    image: { type: String, default: 'https://i.ibb.co.com/xjhTB46/download-3.png' },
    subTopic: { type: Array },
    bgColor :{type:String },
    status: { type: String, enum: ['approved', 'pendding'], default: 'pendding' },
    isDeleted: { type: Boolean, default: false }
},
    { timestamps: true }
)

export const threadModel = model<Tthread>('threads', threadSchema)