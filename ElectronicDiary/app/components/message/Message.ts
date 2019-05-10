export class Message {
    Id: number;
    Text: string;
    IsRead:boolean;
    TimeSent: Date;
    SenderUserId: number;
    SenderUserName:string;
    ReceiverUserId: number;
    ReceiverUserName: string;
    IsSent:boolean;
}