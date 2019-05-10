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
const TutorRegistration_1 = require("./TutorRegistration");
let TutorRegisterComponent = class TutorRegisterComponent {
    // private roles: string[] = ["Admin", "Tutor", "Student"];
    constructor(router, activateRoute, authService, rs) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.authService = authService;
        this.rs = rs;
        this.model = new TutorRegistration_1.TutorRegistration();
        this.rs.get('faculties')
            .toPromise()
            .then(response => response.json())
            .then((result) => {
            this.faculties = result;
        });
    }
    Register(model) {
        if (model.Password === model.ConfirmPassword) {
            this.authService.register(this.model).subscribe((response) => {
                let temp = response;
                this.router.navigate(['../tutors'], { relativeTo: this.activateRoute });
            }, (error) => {
                let temp = error;
                console.log(error);
                alert('Registration error!');
            });
        }
        else {
            alert("Паролі не співпадають!");
        }
    }
};
TutorRegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'tutorRegister.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, request_service_1.RequestService])
], TutorRegisterComponent);
exports.TutorRegisterComponent = TutorRegisterComponent;
//# sourceMappingURL=tutorRegister.component.js.map