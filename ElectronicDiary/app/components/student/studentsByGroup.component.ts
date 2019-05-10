import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Student } from './Student';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'studentsByGroup.component.html'
})
export class StudentsByGroupComponent {
    public students: Student[];
    public groupId: number;

    constructor(private router: Router, private rs: RequestService, private activateRoute: ActivatedRoute) {
        this.groupId = activateRoute.snapshot.params['id'];
        this.rs.get('students/group/' + this.groupId).subscribe((result: any) => {
            this.students = result.json();
        });
    }
}






