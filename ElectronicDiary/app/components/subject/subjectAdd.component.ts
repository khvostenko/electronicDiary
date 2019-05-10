import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../shared/request.service';
import { Subject } from './Subject';
import { Tutor } from '../tutor/Tutor';
import { Faculty } from '../faculty/Faculty';

@Component({
    moduleId: module.id,
    templateUrl: 'subjectAdd.component.html'
})
export class SubjectAddComponent {
    public subject: Subject;
    public subjects: Subject[];
    public tutors: Tutor[];

    constructor(private router: Router, private activateRoute: ActivatedRoute, private rs: RequestService) {
        this.subject = new Subject();

        this.rs.get('tutors')
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.tutors = result;
            })
            .then(response => {
                this.getSubjects();
            });
    }

    private getSubjects() {
        this.rs.get('subjects').subscribe(result => {
            this.subjects = result.json();
        });
    }

    private CheckSubjectForInsert(subjectName: string): boolean {
        for (let subject of this.subjects) {
            if (subject.Name.replace(/\s+/g, '') == subjectName.replace(/\s+/g, '')) {
                return false;
            }
        }

        return true;
    }

    Done(myItem: Subject) {
        if (this.CheckSubjectForInsert(myItem.Name)) {
            this.rs.post('subjects', myItem).subscribe((resp: any) => {
                this.subject = resp.json();
                this.router.navigate(['../subjects'], { relativeTo: this.activateRoute });
            });
        } else {
            alert("Даний предмет вже існує!");
        }
    }
}