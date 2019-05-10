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
const authentication_service_1 = require("../../shared/authentication.service");
const request_service_1 = require("../../shared/request.service");
const AdminRegistration_1 = require("./AdminRegistration");
let AdminRegisterComponent = class AdminRegisterComponent {
    // private roles: string[] = ["Admin", "Tutor", "Student"];
    constructor(router, activateRoute, authService, rs) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.authService = authService;
        this.rs = rs;
        this.model = new AdminRegistration_1.AdminRegistration();
        this.rs.get('faculties')
            .toPromise()
            .then(response => response.json())
            .then((result) => {
            this.faculties = result;
        });
    }
    Register(model) {
        this.authService.register(this.model).subscribe((response) => {
            let temp = response;
            this.router.navigate(['../administrators'], { relativeTo: this.activateRoute });
        }, (error) => {
            let temp = error;
            alert('Registration error!');
        });
    }
};
AdminRegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'adminRegister.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, request_service_1.RequestService])
], AdminRegisterComponent);
exports.AdminRegisterComponent = AdminRegisterComponent;
//# sourceMappingURL=adminRegister.component.js.map