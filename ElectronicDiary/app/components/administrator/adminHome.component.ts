import { Component } from '@angular/core';
import { AuthenticationService } from "../../shared/authentication.service";

@Component({
    moduleId: module.id,
    templateUrl: 'adminHome.component.html'
})
//this is layout page for adminHome with left menu
export class AdminHomeComponent {
    public adminId: number;
   
    constructor(private as: AuthenticationService) {
        this.adminId = as.currentUserId;


    }

   
}