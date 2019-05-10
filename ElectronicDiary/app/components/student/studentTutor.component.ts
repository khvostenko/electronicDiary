import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Student } from './Student';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'studentsTutor.component.html'
})
export class StudentsTutorComponent {
    public students: Student[];
    requestService: RequestService;
    myRouter: Router;

    constructor(private router: Router, rs: RequestService) {
        this.myRouter = router;
        this.requestService = rs;
        this.requestService.get('students').subscribe((result: any) => {
            this.students = result.json();
        });
    }

}






