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
let AdministratorsComponent = class AdministratorsComponent {
    constructor(rs) {
        this.rs = rs;
        rs.get('administrators').subscribe((result) => {
            this.administrators = result.json();
        });
    }
    Delete(id) {
        this.rs.delete('administrators/' + id).subscribe((resp) => {
            this.administrators = this.administrators.filter(x => x.Id !== id);
        });
    }
};
AdministratorsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'administrators-details',
        templateUrl: 'administrators.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], AdministratorsComponent);
exports.AdministratorsComponent = AdministratorsComponent;
//# sourceMappingURL=administrators.component.js.map