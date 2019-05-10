import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Mark } from './Mark';
import { Student } from '../student/Student';
import { Subject } from '../subject/Subject';
import { Tutor } from '../tutor/Tutor';
import { Faculty } from '../faculty/Faculty';
import { Group } from '../group/Group';
import { SubjectDetailsComponent } from '../subject/subjectDetails.component';

@Component({
    moduleId: module.id,
    templateUrl: 'markAdd.component.html'
})
export class MarkAddComponent {
    public subject: Subject;
    public mark: Mark;
    public student: Student;
    public subjectId: number;
    public studentId: number;
    public group: Group;
    public tutorId: number;

    constructor(private router: Router, private activateRoute: ActivatedRoute, private rs: RequestService, private as: AuthenticationService) {
        this.mark = new Mark();
        this.subject = new Subject();
        this.student = new Student();
        this.group = new Group();

        this.studentId = activateRoute.snapshot.params['id'];
        this.tutorId = this.as.currentUserId;
        this.mark.StudentId = this.studentId;

        this.rs.get('groupsbystudent/' + this.studentId).subscribe(result => {
            this.group = result.json();
            this.rs.get('subjectbygroupid/' + this.group.Id + '/' + this.tutorId).subscribe(res => {
                this.subject = res.json();
                this.subjectId = this.subject.Id;
                this.mark.SubjectId = this.subjectId;
            });
        });


    }

    Done(myItem: Mark) {

        this.rs.post('marks', myItem).subscribe((resp: any) => {
            this.mark = resp.json();
            this.router.navigate(['../../students-group', this.group.Id], { relativeTo: this.activateRoute });
        });

    }
}