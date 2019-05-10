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
const authentication_service_1 = require("../../shared/authentication.service");
let MarkEditComponent = class MarkEditComponent {
    constructor(router, activateRoute, rs, authService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.rs = rs;
        this.authService = authService;
        this.id = activateRoute.snapshot.params['id'];
        this.tutorId = this.authService.currentUserId;
        this.rs.get('markbyid/' + this.id).subscribe(res => {
            this.mark = res.json();
            this.rs.get('subjectbyid/' + this.mark.SubjectId).subscribe(result => {
                this.subject = result.json();
            });
            this.rs.get('groupsbystudent/' + this.mark.StudentId).subscribe(resul => {
                this.group = resul.json();
            });
        });
    }
    Edit() {
        if (this.subject.TutorId === this.tutorId) {
            this.rs.put('marks', this.mark)
                .subscribe((data) => {
                this.router.navigate(['../../students-group', this.group.Id], { relativeTo: this.activateRoute });
            }, error => {
                console.log(error);
            });
        }
        else {
            alert('Ви не можете змінити оцінку з цього предмету!');
        }
    }
};
MarkEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'markEdit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, request_service_1.RequestService, authentication_service_1.AuthenticationService])
], MarkEditComponent);
exports.MarkEditComponent = MarkEditComponent;
//# sourceMappingURL=markEdit.component.js.map