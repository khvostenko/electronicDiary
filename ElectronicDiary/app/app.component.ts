import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownModule } from "ngx-dropdown";
import { RequestService } from './shared/request.service';
import { AuthenticationService } from './shared/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [RequestService, AuthenticationService]
})

export class AppComponent {
    public isAuth: boolean = false;
    public userName: string = 'No UserName';

    constructor(private authService: AuthenticationService, private router: Router) {
        this.isAuth = authService.isAuth;
        this.userName = authService.currentUserName;
        authService.appComponent = this;
    }

    openHomePage() { 
        let currentRole = this.authService.currentUserRole;
        if (currentRole !== 'Student') {
            this.router.navigate(['admin-home']);
        } else {
            this.router.navigate(['student-home']);
        }
    }

    signOut() {
        let result = this.authService.signOut();
        if (result) {
            this.isAuth = this.authService.isAuth;
            this.userName = this.authService.currentUserName;
            this.router.navigate(['home']);
        }
    }
}