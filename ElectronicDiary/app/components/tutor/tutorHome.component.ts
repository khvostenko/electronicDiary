import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'tutorHome.component.html'
})
//this is layout page for adminHome with left menu
export class TutorHomeComponent {
    public tutorId: number;
    constructor(private as: AuthenticationService) {
        this.tutorId = as.currentUserId;
    }
}