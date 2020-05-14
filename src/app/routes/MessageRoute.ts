import { Router } from 'express'
import { Request, Response } from "express";
import MessageService from '../services/MessageService'
import Message from '../models/Message';

const MessageRoute = Router();

MessageRoute.get("/", async (req: Request, res: Response) => {
    const messages = await MessageService.getAllMessages();

    res.send(messages);
});

MessageRoute.post("/", async (req: Request, res: Response) => {
    const text = req.body.text;

    const newMessage = await MessageService.saveMessage(text);

    res.send(newMessage);
});

MessageRoute.delete("/", async (req: Request, res: Response) =>{
    const id = parseInt(req.body.id);

    if(id == null || id == undefined){
        res.statusMessage = "Id is missing";
        return res.status(400).end();
    }

    const response = await MessageService.deleteMessage(id);

    res.send({msg: response});
});

export { MessageRoute }