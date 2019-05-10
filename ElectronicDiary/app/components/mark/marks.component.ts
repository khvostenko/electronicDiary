import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Mark } from './Mark';
import { Faculty } from '../faculty/Faculty';
import { Tutor } from '../tutor/Tutor';
import { Subject } from '../subject/Subject';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
    moduleId: module.id,
    templateUrl: 'marks.component.html'
})
export class MarkComponent {
    public marks: Mark[];
    public studentId: number;

    constructor(private rs: RequestService, private as: AuthenticationService) {
        this.studentId = this.as.currentUserId;
        this.rs.get('marks/student/' + this.studentId).subscribe(response => {
            this.marks = response.json();
        });
    }
}