import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Tutor } from './Tutor';

@Component({
    moduleId: module.id,
    selector: 'tutors-details',
    templateUrl: 'tutors.component.html'
})

export class TutorsComponent {
    public tutors: Tutor[];
    public currentRole: boolean = false;
    public showDetails:boolean = true;

    constructor(private rs: RequestService, private as: AuthenticationService) {
        if (this.as.currentUserRole == "Admin") {
            this.currentRole = true;
        }
        if (this.as.currentUserRole == "Student") {
            this.showDetails = false;
        }
        rs.get('tutors').subscribe((result: any) => {
            this.tutors = result.json();
        });
    }

    Delete(id: number) {
        this.rs.delete('tutors/' + id).subscribe((resp: any) => {
            this.tutors = this.tutors.filter(x => x.Id !== id);
        });
    }
}
