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
const Registration_1 = require("./Registration");
let RegisterComponent = class RegisterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.model = new Registration_1.Registration();
        this.loading = false;
    }
    register() {
        this.loading = true;
        this.authService.register(this.model).subscribe((response) => {
            let temp = response;
            this.loading = false;
            this.router.navigate(['login']);
        }, (error) => {
            let temp = error;
            console.log(error);
            alert('Registration error!');
        });
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map