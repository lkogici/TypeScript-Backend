import { getCustomRepository } from 'typeorm';
import MessageRepository from '../repository/MessageRepository';
import Message from '../models/Message';

async function getAllMessages(): Promise<Message[]>{
    const messageRepository = getCustomRepository(MessageRepository);

    return messageRepository.find();;
}

async function saveMessage(text: string): Promise<Message>{
    const messageRepository = getCustomRepository(MessageRepository);

    let newMessage = messageRepository.create({
        text
    });

    return messageRepository.save(newMessage);
}

async function deleteMessage(id: number): Promise<string> {
    const messageRepository = getCustomRepository(MessageRepository);

    const messageToRemove = await messageRepository.findOne(id);

    if(messageToRemove != undefined){
        await messageRepository.remove(messageToRemove);
        
        return "Message deleted successfully";
    }

    return "Message not found";
}

export default {
    getAllMessages,
    saveMessage,
    deleteMessage
};