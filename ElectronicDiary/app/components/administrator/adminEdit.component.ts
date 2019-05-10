import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { RequestService } from '../../shared/request.service';
import { Http, Response, Headers } from '@angular/http';
import { Administrator } from './Administrator';

@Component({
    moduleId: module.id,
    templateUrl: 'adminEdit.component.html'
})
export class AdminEditComponent {
    public admin: Administrator = new Administrator();
    private userId: number;

    constructor(private rs: RequestService, private router: Router, private activateRoute: ActivatedRoute) {
        this.userId = activateRoute.snapshot.params['id'];//user id who you want edit

        this.rs.get('administrators/' + this.userId).subscribe((result: any) => {
            this.admin = result.json();
        });
    }

    Edit(myModel: any) {
        this.rs.put('administrators/' + this.userId, myModel).subscribe((resp: any) => {
            this.router.navigate(['../../info'], { relativeTo: this.activateRoute });
        });
    }
}