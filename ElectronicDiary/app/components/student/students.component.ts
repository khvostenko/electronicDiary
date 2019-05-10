import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Student } from './Student';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'students.component.html'
})
export class StudentsComponent {
    public students: Student[];
    public currentRole: boolean = false;
    public showDetails: boolean = true;
    requestService: RequestService;
    myRouter: Router;

    constructor(private router: Router, rs: RequestService, private as: AuthenticationService) {
        if (this.as.currentUserRole == "Admin") {
            this.currentRole = true;
        }
        if (this.as.currentUserRole == "Student") {
            this.showDetails = false;
        }
        this.myRouter = router;
        this.requestService = rs;
        this.requestService.get('students').subscribe((result: any) => {
            this.students = result.json();
        });
    }

    Delete(id: number) {
        this.requestService.delete('students/' + id).subscribe((resp: any) => {
            this.students = this.students.filter(x => x.Id !== id);
        });
    }
}






