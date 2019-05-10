import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import {Message} from "./Message";

@Component({
    selector: 'my-message',
    styleUrls: ['messagesHistory.component.css'],
    moduleId: module.id,
    templateUrl: 'messages.component.html'
})
export class MessageComponent {
    public sentMessages: Message[];
    public receiveMessages: Message[];
    public currentUserId: number;
    private id:number;

    constructor(private rs: RequestService, private as: AuthenticationService, private activateRoute: ActivatedRoute) {
        this.currentUserId = this.as.currentUserId;
        //this.id = activateRoute.snapshot.params['id'];
        this.rs.get('messages/sent/' + this.currentUserId).subscribe(response => {
            this.sentMessages = response.json();
        });

        this.rs.get('messages/receive/' + this.currentUserId).subscribe(response => {
            this.receiveMessages = response.json();
        });
    }
}