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
const authentication_service_1 = require("../../shared/authentication.service");
const Mark_1 = require("./Mark");
const Student_1 = require("../student/Student");
const Subject_1 = require("../subject/Subject");
const Group_1 = require("../group/Group");
let MarkAddComponent = class MarkAddComponent {
    constructor(router, activateRoute, rs, as) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.rs = rs;
        this.as = as;
        this.mark = new Mark_1.Mark();
        this.subject = new Subject_1.Subject();
        this.student = new Student_1.Student();
        this.group = new Group_1.Group();
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
    Done(myItem) {
        this.rs.post('marks', myItem).subscribe((resp) => {
            this.mark = resp.json();
            this.router.navigate(['../../students-group', this.group.Id], { relativeTo: this.activateRoute });
        });
    }
};
MarkAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'markAdd.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, request_service_1.RequestService, authentication_service_1.AuthenticationService])
], MarkAddComponent);
exports.MarkAddComponent = MarkAddComponent;
//# sourceMappingURL=markAdd.component.js.map