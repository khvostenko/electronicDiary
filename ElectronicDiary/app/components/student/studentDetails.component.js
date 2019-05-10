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
const request_service_1 = require("../../shared/request.service");
const router_1 = require("@angular/router");
let StudentDetailsComponent = class StudentDetailsComponent {
    constructor(router, activateRoute, requestService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.requestService = requestService;
        this.id = activateRoute.snapshot.params['id'];
        this.requestService.get('students/' + this.id)
            .toPromise()
            .then(response => response.json())
            .then((result) => {
            this.student = result;
            this.getFacultyById(this.student.FacultyId);
        })
            .then((result) => {
            this.getGroupById(this.student.GroupId);
        });
        this.requestService.get('marks/student/' + this.id).subscribe(response => {
            this.marks = response.json();
        });
        //requestService.get('students/' + this.id).subscribe((result: any) => {
        //    this.student = result.json();
        //});
    }
    getFacultyById(facultyId) {
        this.requestService.get('faculties/' + facultyId).subscribe((result) => {
            this.faculty = result.json();
        });
    }
    getGroupById(groupId) {
        this.requestService.get('groups/' + groupId).subscribe((result) => {
            this.group = result.json();
        });
    }
};
StudentDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'studentDetails.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, request_service_1.RequestService])
], StudentDetailsComponent);
exports.StudentDetailsComponent = StudentDetailsComponent;
//# sourceMappingURL=studentDetails.component.js.map