import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { RequestService } from '../../shared/request.service';
import { AdminRegistration } from './AdminRegistration';
import { Faculty } from '../faculty/Faculty';

@Component({
    moduleId: module.id,
    templateUrl: 'adminRegister.component.html'
})
export class AdminRegisterComponent {
    public model: AdminRegistration = new AdminRegistration();
    private faculties: Faculty[];
    // private roles: string[] = ["Admin", "Tutor", "Student"];

    constructor(private router: Router, private activateRoute: ActivatedRoute, private authService: AuthenticationService, private rs: RequestService) {
        this.rs.get('faculties')
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.faculties = result;
            });
    }

    Register(model: AdminRegistration) {
        this.authService.register(this.model).subscribe((response: any) => {
            let temp = response;
            this.router.navigate(['../administrators'], { relativeTo: this.activateRoute });

        }, (error: any) => {
            let temp = error;
            alert('Registration error!');
        });
    }
}