import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Administrator } from './Administrator';

@Component({
    moduleId: module.id,
    templateUrl: 'adminInfo.component.html'
})

export class AdminInfoComponent {
    public admin: Administrator = new Administrator();

    constructor(private rs: RequestService,
        private authService: AuthenticationService) {

        let currentId = authService.currentUserId;
        this.rs.get('administrators/' + currentId).subscribe((result: any) => {
            this.admin = result.json();
        });
    }
}






