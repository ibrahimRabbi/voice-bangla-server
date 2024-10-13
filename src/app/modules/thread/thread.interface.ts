import { Types } from "mongoose"


export type Tthread = {
    user : Types.ObjectId,
    category: 'safe and security'| 'community'| 'emergancy'| 'report'| 'thread'| 'others',
    topic: 'hospitality'| 'further details'| 'describe issue'
    topicDetails: string,
    details: string,
    comments?: string[],
    bgColor?:string,
    image? : string,
    subTopic?: string, 
    isDeleted?: boolean,
    status? : string
}


export type TbgColor = {
    'safe and security': string,
    community: string,
    emergancy: string,
    report: string,
    thread: string
    others: string
}