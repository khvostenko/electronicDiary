import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';
import { Registration } from './Registration';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: Registration = new Registration();
    loading = false;

    constructor(private router: Router, private authService: AuthenticationService) {
        
    }

    register() {
        this.loading = true;
        this.authService.register(this.model).subscribe((response: any) => {
            let temp = response;
            this.loading = false;
            this.router.navigate(['login']);
        },
            (error: any) => {
                let temp = error;
                console.log(error);
                alert('Registration error!');
            });
    }
}
