import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Message } from './Message';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageComponent } from './messages.component';

@Component({
    moduleId: module.id,
    templateUrl: 'sentMessage.component.html'
})
export class SentMessageComponent {
    public message: Message;
    public senderUserId: number;
    public receiverUserId: number;

    constructor(private router: Router,
        private activateRoute: ActivatedRoute,
        private rs: RequestService,
        private as: AuthenticationService) {

        this.message = new Message();
        this.senderUserId = this.as.currentUserId;
        this.receiverUserId = activateRoute.snapshot.params['id'];

        this.message.IsRead = false;
        this.message.ReceiverUserId = this.receiverUserId;
        this.message.SenderUserId = this.senderUserId;
    }

    Done(myItem: Message) {
        this.rs.post('messages', myItem).subscribe((resp: any) => {
            this.message = resp.json();
            this.router.navigate(['../../'], { relativeTo: this.activateRoute });
        });
    }
}