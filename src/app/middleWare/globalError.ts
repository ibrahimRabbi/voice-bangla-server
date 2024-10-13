import { NextFunction, Request, response, Response } from 'express';



export const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {

     
    let statusCode = err.statusCode;
    let message = err.err.message || 'something went wrong';
 

    res.json({
        success: false,
        status: statusCode,
        message,
        errorSource: err.err
    })
}