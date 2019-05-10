import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../shared/request.service';
import { Group } from './Group';
import { Faculty } from '../faculty/Faculty';

@Component({
    moduleId: module.id,
    templateUrl: 'groupAdd.component.html'
})
export class GroupAddComponent {
    public group: Group;
    public groups: Group[];
    public faculties: Faculty[];

    constructor(private router: Router, private activateRoute: ActivatedRoute, private rs: RequestService) {
        this.group = new Group();

        this.rs.get('faculties')
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.faculties = result;
            })
            .then(response => {
                this.getGroups();
            });
    }

    private getGroups() {
        this.rs.get('groups').subscribe(result => {
            this.groups = result.json();
        });
    }

    private CheckGroupForInsert(groupName: string): boolean {
        for (let group of this.groups) {
            if (group.Name.replace(/\s+/g, '') == groupName.replace(/\s+/g, '')) {
                return false;
            }
        }

        return true;
    }

    Done(myItem: Group) {
        if (this.CheckGroupForInsert(myItem.Name)) {
            this.rs.post('groups', myItem).subscribe((resp: any) => {
                this.group = resp.json();
                this.router.navigate(['../groups'], { relativeTo: this.activateRoute });
            });
        } else {
            alert("Дана група вже існує!");
        }
    }
}