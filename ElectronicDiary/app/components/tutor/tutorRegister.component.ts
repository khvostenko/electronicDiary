import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { RequestService } from '../../shared/request.service';
import { TutorRegistration } from './TutorRegistration';
import { Faculty } from '../faculty/Faculty';

@Component({
    moduleId: module.id,
    templateUrl: 'tutorRegister.component.html'
})
export class TutorRegisterComponent {
    public model: TutorRegistration = new TutorRegistration();
    private faculties: Faculty[];
    // private roles: string[] = ["Admin", "Tutor", "Student"];

    constructor(private router: Router, private activateRoute: ActivatedRoute, private authService: AuthenticationService, private rs: RequestService) {
        this.rs.get('faculties')
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.faculties = result;
            })
    }

    Register(model: TutorRegistration) {
        if (model.Password === model.ConfirmPassword) {
            this.authService.register(this.model).subscribe((response: any) => {
                let temp = response;
                this.router.navigate(['../tutors'], { relativeTo: this.activateRoute });

            }, (error: any) => {
                let temp = error;
                console.log(error);
                alert('Registration error!');
            });
        }
        else {
            alert("Паролі не співпадають!");
        }
    }
}