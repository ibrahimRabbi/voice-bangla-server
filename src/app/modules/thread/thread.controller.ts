import { NextFunction, Request, response, Response } from "express";
import { threadModel } from "./thread.mdel";
import { TbgColor } from "./thread.interface";


export const postThreadController = async (req: Request, res: Response, next: NextFunction) => {

    // const bgColor: TbgColor = {
    //     'safe and security': '#c1d9fc',
    //     'community': '#aafeef',
    //     'emergancy': '#e8aafe',
    //     'report': '#fabbae',
    //     'thread': '#aefac0',
    //     'others': '#fdfbbc'
    // }

    try {
        
        // const select: string = req.body?.category
        // const color = bgColor[select]
        const adding = await threadModel.create({ ...req.body})
        res.status(200).json({ success: true, status: 200, response: adding })
    } catch (err: any) {
        next({ statusCode: 400, err })
    }
}


export const getThreadController = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const threads = await threadModel.find().populate('user')
        res.status(200).json({ success: true, status: 200, response: threads })
    } catch (err: any) {
        next({ statusCode: 400, err })
    }

}



export const getSingleThreadController = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const threads = await threadModel.findById(req.params.id).populate('user')
        res.status(200).json({ success: true, status: 200, response: threads })
    } catch (err: any) {
        next({ statusCode: 400, err })
    }
}


export const  addCommentThred = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
     
    try {
        const threads = await threadModel.findByIdAndUpdate(id ,
            { $push: { comments: req.body?.comment } },
            {new:true}
        )
         
        res.status(200).json({ success: true, status: 200, response: threads })
    } catch (err: any) {
        next({ statusCode: 400, err })
    }

}