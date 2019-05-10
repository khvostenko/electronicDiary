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
let FacultyComponent = class FacultyComponent {
    constructor(router, rs) {
        this.router = router;
        this.rs = rs;
        this.rs.get('faculties').subscribe(result => {
            this.faculties = result.json();
        });
    }
};
FacultyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'faculties.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, request_service_1.RequestService])
], FacultyComponent);
exports.FacultyComponent = FacultyComponent;
//# sourceMappingURL=faculties.component.js.map