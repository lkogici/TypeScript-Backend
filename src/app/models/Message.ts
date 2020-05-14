import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('messages')
class Message {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    text: string;
}

export default Message;