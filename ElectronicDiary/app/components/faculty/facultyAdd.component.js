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
const Faculty_1 = require("./Faculty");
let FacultyAddComponent = class FacultyAddComponent {
    constructor(router, activateRoute, rs) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.rs = rs;
        this.faculty = new Faculty_1.Faculty();
    }
    Add() {
        this.rs.post('faculties', this.faculty)
            .subscribe((data) => {
            this.router.navigate(['../faculties'], { relativeTo: this.activateRoute });
        }, error => {
            console.log(error);
        });
    }
};
FacultyAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'facultyAdd.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, request_service_1.RequestService])
], FacultyAddComponent);
exports.FacultyAddComponent = FacultyAddComponent;
//# sourceMappingURL=facultyAdd.component.js.map