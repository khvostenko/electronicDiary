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
const router_1 = require("@angular/router");
let MessageComponent = class MessageComponent {
    constructor(rs, as, activateRoute) {
        this.rs = rs;
        this.as = as;
        this.activateRoute = activateRoute;
        this.currentUserId = this.as.currentUserId;
        //this.id = activateRoute.snapshot.params['id'];
        this.rs.get('messages/sent/' + this.currentUserId).subscribe(response => {
            this.sentMessages = response.json();
        });
        this.rs.get('messages/receive/' + this.currentUserId).subscribe(response => {
            this.receiveMessages = response.json();
        });
    }
};
MessageComponent = __decorate([
    core_1.Component({
        selector: 'my-message',
        styleUrls: ['messagesHistory.component.css'],
        moduleId: module.id,
        templateUrl: 'messages.component.html'
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute])
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=messages.component.js.map