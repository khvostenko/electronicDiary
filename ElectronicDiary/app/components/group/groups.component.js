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
let GroupComponent = class GroupComponent {
    constructor(router, rs) {
        this.router = router;
        this.rs = rs;
        this.isAvaliable = localStorage.getItem('userRole') == "Admin";
        this.rs.get('groups')
            .toPromise()
            .then(response => response.json())
            .then((result) => {
            this.groups = result;
        })
            .then(response => {
            this.getFaculties();
        });
    }
    getFaculties() {
        this.rs.get('faculties').subscribe(result => {
            this.faculties = result.json();
        });
    }
    getfacultyName(facultyuId) {
        for (var index in this.faculties) {
            if (this.faculties[index].Id == facultyuId) {
                return this.faculties[index].Name;
            }
        }
        return "";
    }
};
GroupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'groups.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, request_service_1.RequestService])
], GroupComponent);
exports.GroupComponent = GroupComponent;
//# sourceMappingURL=groups.component.js.map