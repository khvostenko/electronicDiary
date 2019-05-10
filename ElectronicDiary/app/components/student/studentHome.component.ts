import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'studentHome.component.html'
})

export class StudentHomeComponent {
    public studentId: number;
    constructor(private as: AuthenticationService) {
        this.studentId = as.currentUserId;
    }
}