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
const authentication_service_1 = require("../../shared/authentication.service");
const router_1 = require("@angular/router");
const Tutor_1 = require("./Tutor");
const Faculty_1 = require("../faculty/Faculty");
let TutorInfoComponent = class TutorInfoComponent {
    constructor(router, activateRoute, rs, authService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.rs = rs;
        this.authService = authService;
        this.id = authService.currentUserId;
        this.tutor = new Tutor_1.Tutor();
        this.faculty = new Faculty_1.Faculty();
        this.rs.get('tutorbyid/' + this.id).subscribe(result => {
            this.tutor = result.json();
            this.getFacultyById(this.tutor.FacultyId);
        });
    }
    getFacultyById(facultyId) {
        this.rs.get('faculties/' + facultyId).subscribe((result) => {
            this.faculty = result.json();
        });
    }
};
TutorInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'tutorInfo.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, request_service_1.RequestService, authentication_service_1.AuthenticationService])
], TutorInfoComponent);
exports.TutorInfoComponent = TutorInfoComponent;
//# sourceMappingURL=tutorInfo.component.js.map