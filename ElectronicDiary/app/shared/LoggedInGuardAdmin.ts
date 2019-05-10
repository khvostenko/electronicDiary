import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuardAdmin implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        if (localStorage.getItem('userRole') == 'Admin') {

            return true;
        } else {
            this.router.navigate(['/info']);

            return false;
        }
    }
}
