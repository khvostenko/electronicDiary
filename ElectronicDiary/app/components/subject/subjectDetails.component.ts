import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Group } from '../group/Group';
import { Subject } from './Subject';
import { Faculty } from '../faculty/Faculty';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'groupsDetail.component.html'
})
export class SubjectDetailsComponent {
    public groups: Group[];
    public subject: Subject;
    public faculties: Faculty[];
    public subjectId: number;

    constructor(private router: Router, private rs: RequestService, private activateRoute: ActivatedRoute) {

        this.subjectId = activateRoute.snapshot.params['id'];

        this.rs.get('allgroups/' + this.subjectId)
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.groups = result;
            })
            .then(response => {
                this.getFaculties();
            });
    }

    getFaculties() {
        this.rs.get('faculties').subscribe(result => {
            this.faculties = result.json();
        });
    }

    getfacultyName(facultyuId: number): string {

        for (var index in this.faculties) {
            if (this.faculties[index].Id == facultyuId) {
                return this.faculties[index].Name;
            }
        }

        return "";
    }
}