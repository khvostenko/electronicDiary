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
let TutorsComponent = class TutorsComponent {
    constructor(rs, as) {
        this.rs = rs;
        this.as = as;
        this.currentRole = false;
        this.showDetails = true;
        if (this.as.currentUserRole == "Admin") {
            this.currentRole = true;
        }
        if (this.as.currentUserRole == "Student") {
            this.showDetails = false;
        }
        rs.get('tutors').subscribe((result) => {
            this.tutors = result.json();
        });
    }
    Delete(id) {
        this.rs.delete('tutors/' + id).subscribe((resp) => {
            this.tutors = this.tutors.filter(x => x.Id !== id);
        });
    }
};
TutorsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tutors-details',
        templateUrl: 'tutors.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService, authentication_service_1.AuthenticationService])
], TutorsComponent);
exports.TutorsComponent = TutorsComponent;
//# sourceMappingURL=tutors.component.js.map