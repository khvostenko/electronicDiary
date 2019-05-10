import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from './Subject';

@Component({
    moduleId: module.id,
    selector: 'subjectsForTutor-details',
    templateUrl: 'subjectsForTutor.component.html'
})

export class SubjectsForTutorComponent {
    public subjects: Subject[];
    private userId: number;

    constructor(private rs: RequestService, private as: AuthenticationService) {
        this.userId = as.currentUserId;
        rs.get('subjects/tutor/' + this.userId).subscribe((result: any) => {
            this.subjects = result.json();
        });
    }
}
