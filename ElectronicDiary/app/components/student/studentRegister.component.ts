import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { RequestService } from '../../shared/request.service';
import { StudentRegistration } from './StudentRegistration';
import { Group } from '../group/Group';
import { Faculty } from '../faculty/Faculty';

@Component({
    moduleId: module.id,
    templateUrl: 'studentRegister.component.html'
})

export class StudentRegisterComponent {
    model: StudentRegistration = new StudentRegistration();
    private groups: Group[];
    private faculties: Faculty[];
    loading = false;

    constructor(private router: Router, private authService: AuthenticationService, private activateRoute: ActivatedRoute, private rs: RequestService) {
        this.rs.get('faculties')
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.faculties = result;
            })
            .then(response => {
                this.getGroups();
            })
    }

    Register(model: StudentRegistration) {
        this.loading = true;

        if (model.Password === model.ConfirmPassword) {
            this.authService.register(model).subscribe((response: any) => {
                let temp = response;
                this.loading = false;
                this.router.navigate(['../students'], { relativeTo: this.activateRoute });

            }, (error: any) => {
                let temp = error;
                alert('Registration error!');
            });
        }
        else {
            alert("Паролі не співпадають!");
        }
        
    }

    getGroups() {
        this.rs.get('groups').subscribe(result => {
            this.groups = result.json();
        });
    }
}

