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
let SubjectsComponent = class SubjectsComponent {
    constructor(rs) {
        this.rs = rs;
        rs.get('subjects').subscribe((result) => {
            this.subjects = result.json();
        });
    }
    Delete(id) {
        this.rs.delete('subjects/' + id).subscribe((resp) => {
            this.subjects = this.subjects.filter(x => x.Id !== id);
        });
    }
};
SubjectsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'subjects-details',
        templateUrl: 'subjects.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], SubjectsComponent);
exports.SubjectsComponent = SubjectsComponent;
//# sourceMappingURL=subjects.component.js.map