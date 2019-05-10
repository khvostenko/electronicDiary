import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Faculty } from './Faculty';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'faculties.component.html'
})
export class FacultyComponent {
    public faculties: Faculty[];

    constructor(private router: Router, private rs: RequestService) {
        this.rs.get('faculties').subscribe(result => {
            this.faculties = result.json();
        });
    }
}