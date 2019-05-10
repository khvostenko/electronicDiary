import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../shared/request.service';
import { AuthenticationService } from '../../shared/authentication.service';
import { Mark } from './Mark';
import { Student } from '../student/Student';
import { Subject } from '../subject/Subject';
import { Group } from '../group/Group';

@Component({
    moduleId: module.id,
    templateUrl: 'markEdit.component.html'
})

export class MarkEditComponent {
    private mark: Mark;
    private id: number;
    private tutorId: number;
    private subject: Subject;
    private group: Group;

    constructor(private router: Router, private activateRoute: ActivatedRoute, private rs: RequestService, private authService: AuthenticationService) {
        this.id = activateRoute.snapshot.params['id'];
        this.tutorId = this.authService.currentUserId;
        this.rs.get('markbyid/' + this.id).subscribe(res => {
            this.mark = res.json();
            this.rs.get('subjectbyid/' + this.mark.SubjectId).subscribe(result => {
                this.subject = result.json();
            });
            this.rs.get('groupsbystudent/' + this.mark.StudentId).subscribe(resul => {
                this.group = resul.json();
            });
        });
        
    }

    private Edit() {
        if (this.subject.TutorId === this.tutorId) {
            this.rs.put('marks', this.mark)
                .subscribe(
                (data: any) => {
                    this.router.navigate(['../../students-group', this.group.Id], { relativeTo: this.activateRoute });
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
        else {
            alert('Ви не можете змінити оцінку з цього предмету!');
        }
        
    }
}