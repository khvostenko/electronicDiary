import { Component } from '@angular/core';
import { RequestService } from '../../shared/request.service';
import { Subject } from './Subject';

@Component({
    moduleId: module.id,
    selector: 'subjects-details',
    templateUrl: 'subjects.component.html'
})

export class SubjectsComponent {
    public subjects: Subject[];

    constructor(private rs: RequestService) {
        rs.get('subjects').subscribe((result: any) => {
            this.subjects = result.json();
        });
    }

    Delete(id: number) {
        this.rs.delete('subjects/' + id).subscribe((resp: any) => {
            this.subjects = this.subjects.filter(x => x.Id !== id);
        });
    }
}
