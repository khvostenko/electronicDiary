import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Student } from './Student';

@Component({
    moduleId: module.id,
    templateUrl: 'studentInfo.component.html'
})

export class StudentInfoComponent {
    public student: Student = new Student();

    constructor(private rs: RequestService,
        private authService: AuthenticationService) {

        let currentId = authService.currentUserId;
        this.rs.get('students/' + currentId).subscribe((result: any) => {
            this.student = result.json();
        });
    }
}






