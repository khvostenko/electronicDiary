import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Student } from './Student';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from '../faculty/Faculty';
import { Group } from '../group/Group';
import { Mark } from '../mark/Mark';
import { Tutor } from '../tutor/Tutor';
import { Subject } from '../subject/Subject';


@Component({
    moduleId: module.id,
    templateUrl: 'studentDetails.component.html'
})
export class StudentDetailsComponent {
    public student: Student;
    private faculty: Faculty;
    private group: Group;
    private id: number;
    public marks: Mark[];
    public studentId: number;
    public tutors: Tutor[];
    public subjects: Subject[];

    constructor(private router: Router, private activateRoute: ActivatedRoute, private requestService: RequestService) {

        this.id = activateRoute.snapshot.params['id'];

        this.requestService.get('students/' + this.id)
            .toPromise()
            .then(response => response.json())
            .then((result: any) => {
                this.student = result;
                this.getFacultyById(this.student.FacultyId)
            })
            .then((result: any) => {
                this.getGroupById(this.student.GroupId);
            });

        this.requestService.get('marks/student/' + this.id).subscribe(response => {
            this.marks = response.json();
        });
        //requestService.get('students/' + this.id).subscribe((result: any) => {
        //    this.student = result.json();
        //});
    }

    private getFacultyById(facultyId: number) {
        this.requestService.get('faculties/' + facultyId).subscribe((result: any) => {
            this.faculty = result.json();
        });
    }

    private getGroupById(groupId: number) {
        this.requestService.get('groups/' + groupId).subscribe((result: any) => {
            this.group = result.json();
        });
    }
}
