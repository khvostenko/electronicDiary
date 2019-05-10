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
const request_service_1 = require("../../shared/request.service");
const Tutor_1 = require("./Tutor");
let TutorEditComponent = class TutorEditComponent {
    constructor(rs, router, activateRoute) {
        this.rs = rs;
        this.router = router;
        this.activateRoute = activateRoute;
        this.tutor = new Tutor_1.Tutor();
        this.userId = activateRoute.snapshot.params['id']; //user id who you want edit
        this.rs.get('tutors/' + this.userId).subscribe((result) => {
            this.tutor = result.json();
        });
    }
    Edit(myModel) {
        this.rs.put('tutors/' + this.userId, myModel).subscribe((resp) => {
            this.router.navigate(['../../info'], { relativeTo: this.activateRoute });
        });
    }
};
TutorEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'tutorEdit.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService, router_1.Router, router_1.ActivatedRoute])
], TutorEditComponent);
exports.TutorEditComponent = TutorEditComponent;
//# sourceMappingURL=tutorEdit.component.js.map