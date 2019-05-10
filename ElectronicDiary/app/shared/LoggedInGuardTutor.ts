import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuardTutor implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (localStorage.getItem('userRole') == 'Tutor') {

            return true;
        } else {
            this.router.navigate(['/info']);

            return false;
        }
    }
}
