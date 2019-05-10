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
const Administrator_1 = require("./Administrator");
let AdminInfoComponent = class AdminInfoComponent {
    constructor(rs, authService) {
        this.rs = rs;
        this.authService = authService;
        this.admin = new Administrator_1.Administrator();
        let currentId = authService.currentUserId;
        this.rs.get('administrators/' + currentId).subscribe((result) => {
            this.admin = result.json();
        });
    }
};
AdminInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'adminInfo.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        authentication_service_1.AuthenticationService])
], AdminInfoComponent);
exports.AdminInfoComponent = AdminInfoComponent;
//# sourceMappingURL=adminInfo.component.js.map