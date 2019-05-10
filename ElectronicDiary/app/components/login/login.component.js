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
const Login_1 = require("./Login");
let LoginComponent = class LoginComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.model = new Login_1.Login();
        this.loading = false;
    }
    login() {
        this.loading = true;
        this.authService.login(this.model).subscribe((response) => {
            this.loading = false;
            if (this.authService.currentUserRole == 'Admin') {
                this.router.navigate(['admin-home']);
            }
            else if (this.authService.currentUserRole == 'Student') {
                this.router.navigate(['student-home']);
            }
            else if (this.authService.currentUserRole == 'Tutor') {
                this.router.navigate(['tutor-home']);
            }
        }, (error) => {
            let temp = error;
            alert("Невірний логін або пароль!");
            this.loading = false;
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map