"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const request_service_1 = require("../../shared/request.service");
const Subject_1 = require("./Subject");
let SubjectAddComponent = class SubjectAddComponent {
    constructor(router, activateRoute, rs) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.rs = rs;
        this.subject = new Subject_1.Subject();
        this.rs.get('tutors')
            .toPromise()
            .then(response => response.json())
            .then((result) => {
            this.tutors = result;
        })
            .then(response => {
            this.getSubjects();
        });
    }
    getSubjects() {
        this.rs.get('subjects').subscribe(result => {
            this.subjects = result.json();
        });
    }
    CheckSubjectForInsert(subjectName) {
        for (let subject of this.subjects) {
            if (subject.Name.replace(/\s+/g, '') == subjectName.replace(/\s+/g, '')) {
                return false;
            }
        }
        return true;
    }
    Done(myItem) {
        if (this.CheckSubjectForInsert(myItem.Name)) {
            this.rs.post('subjects', myItem).subscribe((resp) => {
                this.subject = resp.json();
                this.router.navigate(['../subjects'], { relativeTo: this.activateRoute });
            });
        }
        else {
            alert("Даний предмет вже існує!");
        }
    }
};
SubjectAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'subjectAdd.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, request_service_1.RequestService])
], SubjectAddComponent);
exports.SubjectAddComponent = SubjectAddComponent;
//# sourceMappingURL=subjectAdd.component.js.map