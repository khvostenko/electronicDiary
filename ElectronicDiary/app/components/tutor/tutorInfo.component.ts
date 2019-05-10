import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutor } from './Tutor';
import { Faculty } from '../faculty/Faculty';

@Component({
    moduleId: module.id,
    templateUrl: 'tutorInfo.component.html'
})

export class TutorInfoComponent {
    public tutor: Tutor;
    private faculty: Faculty;
    private id: number;

    constructor(private router: Router, private activateRoute: ActivatedRoute, private rs: RequestService, private authService: AuthenticationService) {
        this.id = authService.currentUserId;
        this.tutor = new Tutor();
        this.faculty = new Faculty();
        this.rs.get('tutorbyid/' + this.id).subscribe(result => {
            this.tutor = result.json();
            this.getFacultyById(this.tutor.FacultyId);
        });
            
    }

    private getFacultyById(facultyId: number) {
        this.rs.get('faculties/' + facultyId).subscribe((result: any) => {
            this.faculty = result.json();
        });
    }
}