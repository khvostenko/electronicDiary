import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {
        if (localStorage.getItem('userRole') == null) {

            return true;
        } else {
            this.router.navigate(['/home']);

            return false;
        }
    }
}