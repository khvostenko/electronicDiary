import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from "./Message";

@Component({
    selector: 'history-message',
    moduleId: module.id,
    styleUrls: ['messagesHistory.component.css'],
    templateUrl: 'messagesHistory.component.html'
})
export class MessageHistoryComponent {
    public historyMessages: Message[];
    public currentUserId: number;
    private id: number;

    constructor(private rs: RequestService, private as: AuthenticationService, private activateRoute: ActivatedRoute) {
        this.currentUserId = this.as.currentUserId;
        this.id = activateRoute.snapshot.params['id'];
        this.rs.get('messages/history/' + this.currentUserId + '/' + this.id).subscribe(response => {
            this.historyMessages = response.json();
        });
    }
}