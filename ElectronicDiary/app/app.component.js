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
const request_service_1 = require("./shared/request.service");
const authentication_service_1 = require("./shared/authentication.service");
let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuth = false;
        this.userName = 'No UserName';
        this.isAuth = authService.isAuth;
        this.userName = authService.currentUserName;
        authService.appComponent = this;
    }
    openHomePage() {
        let currentRole = this.authService.currentUserRole;
        if (currentRole !== 'Student') {
            this.router.navigate(['admin-home']);
        }
        else {
            this.router.navigate(['student-home']);
        }
    }
    signOut() {
        let result = this.authService.signOut();
        if (result) {
            this.isAuth = this.authService.isAuth;
            this.userName = this.authService.currentUserName;
            this.router.navigate(['home']);
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        providers: [request_service_1.RequestService, authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map