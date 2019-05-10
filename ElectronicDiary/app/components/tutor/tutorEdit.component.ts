import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { RequestService } from '../../shared/request.service';
import { Http, Response, Headers } from '@angular/http';
import { Tutor } from './Tutor';

@Component({
    moduleId: module.id,
    templateUrl: 'tutorEdit.component.html'
})
export class TutorEditComponent {
    public tutor: Tutor = new Tutor();
    private userId: number;

    constructor(private rs: RequestService, private router: Router, private activateRoute: ActivatedRoute) {
        this.userId = activateRoute.snapshot.params['id'];//user id who you want edit

        this.rs.get('tutors/' + this.userId).subscribe((result: any) => {
            this.tutor = result.json();
        });
    }

    Edit(myModel: any) {
        this.rs.put('tutors/' + this.userId, myModel).subscribe((resp: any) => {
            this.router.navigate(['../../info'], { relativeTo: this.activateRoute });
        });
    }
}