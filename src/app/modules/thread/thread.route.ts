import { Router } from "express";
import { addCommentThred, getSingleThreadController, getThreadController, postThreadController } from "./thread.controller";

export const threadRoute = Router()

threadRoute.post('/post-thread', postThreadController)

threadRoute.get('/get-thread', getThreadController)

threadRoute.get('/get-single-thread/:id', getSingleThreadController)

threadRoute.patch('/add-comment/:id', addCommentThred)