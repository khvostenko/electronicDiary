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
const Message_1 = require("./Message");
const router_1 = require("@angular/router");
let SentMessageComponent = class SentMessageComponent {
    constructor(router, activateRoute, rs, as) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.rs = rs;
        this.as = as;
        this.message = new Message_1.Message();
        this.senderUserId = this.as.currentUserId;
        this.receiverUserId = activateRoute.snapshot.params['id'];
        this.message.IsRead = false;
        this.message.ReceiverUserId = this.receiverUserId;
        this.message.SenderUserId = this.senderUserId;
    }
    Done(myItem) {
        this.rs.post('messages', myItem).subscribe((resp) => {
            this.message = resp.json();
            this.router.navigate(['../../'], { relativeTo: this.activateRoute });
        });
    }
};
SentMessageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'sentMessage.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        request_service_1.RequestService,
        authentication_service_1.AuthenticationService])
], SentMessageComponent);
exports.SentMessageComponent = SentMessageComponent;
//# sourceMappingURL=sentMessage.component.js.map