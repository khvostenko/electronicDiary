import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Group } from './Group';
import { Faculty } from '../faculty/Faculty';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'groups.component.html'
})
export class GroupComponent {
    public groups: Group[];
    public faculties: Faculty[];
    private isAvaliable: boolean;

    constructor(private router: Router, private rs: RequestService) {
        this.isAvaliable = localStorage.getItem('userRole') == "Admin";

        this.rs.get('groups')
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