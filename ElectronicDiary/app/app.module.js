"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const ngx_dropdown_1 = require("ngx-dropdown");
require("rxjs/Rx");
const administrators_component_1 = require("./components/administrator/administrators.component");
const adminRegister_component_1 = require("./components/administrator/adminRegister.component");
const adminInfo_component_1 = require("./components/administrator/adminInfo.component");
const adminHome_component_1 = require("./components/administrator/adminHome.component");
const adminEdit_component_1 = require("./components/administrator/adminEdit.component");
const faculties_component_1 = require("./components/faculty/faculties.component");
const facultyAdd_component_1 = require("./components/faculty/facultyAdd.component");
const groupAdd_component_1 = require("./components/group/groupAdd.component");
const groups_component_1 = require("./components/group/groups.component");
const home_component_1 = require("./components/home/home.component");
const login_component_1 = require("./components/login/login.component");
const marks_component_1 = require("./components/mark/marks.component");
const markEdit_component_1 = require("./components/mark/markEdit.component");
const markAdd_component_1 = require("./components/mark/markAdd.component");
const messages_component_1 = require("./components/message/messages.component");
const sentMessage_component_1 = require("./components/message/sentMessage.component");
const messagesHistory_component_1 = require("./components/message/messagesHistory.component");
const register_component_1 = require("./components/register/register.component");
const studentDetails_component_1 = require("./components/student/studentDetails.component");
const studentsByGroup_component_1 = require("./components/student/studentsByGroup.component");
const studentHome_component_1 = require("./components/student/studentHome.component");
const studentInfo_component_1 = require("./components/student/studentInfo.component");
const studentRegister_component_1 = require("./components/student/studentRegister.component");
const studentTutor_component_1 = require("./components/student/studentTutor.component");
const students_component_1 = require("./components/student/students.component");
const subjects_component_1 = require("./components/subject/subjects.component");
const mySubjectForTutor_component_1 = require("./components/subject/mySubjectForTutor.component");
const subjectAdd_component_1 = require("./components/subject/subjectAdd.component");
const subjectDetails_component_1 = require("./components/subject/subjectDetails.component");
const tutorEdit_component_1 = require("./components/tutor/tutorEdit.component");
const tutorHome_component_1 = require("./components/tutor/tutorHome.component");
const tutorInfo_component_1 = require("./components/tutor/tutorInfo.component");
const tutorRegister_component_1 = require("./components/tutor/tutorRegister.component");
const tutors_component_1 = require("./components/tutor/tutors.component");
const LoggedInGuard_1 = require("./shared/LoggedInGuard");
const LoggedInGuardAdmin_1 = require("./shared/LoggedInGuardAdmin");
const LoggedInGuardStudenet_1 = require("./shared/LoggedInGuardStudenet");
const LoggedInGuardTutor_1 = require("./shared/LoggedInGuardTutor");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        providers: [LoggedInGuard_1.LoggedInGuard, LoggedInGuardAdmin_1.LoggedInGuardAdmin, LoggedInGuardStudenet_1.LoggedInGuardStudent, LoggedInGuardTutor_1.LoggedInGuardTutor],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            administrators_component_1.AdministratorsComponent, adminEdit_component_1.AdminEditComponent, adminHome_component_1.AdminHomeComponent, adminInfo_component_1.AdminInfoComponent, adminRegister_component_1.AdminRegisterComponent,
            faculties_component_1.FacultyComponent, facultyAdd_component_1.FacultyAddComponent,
            groupAdd_component_1.GroupAddComponent, groups_component_1.GroupComponent,
            login_component_1.LoginComponent, register_component_1.RegisterComponent,
            marks_component_1.MarkComponent, markAdd_component_1.MarkAddComponent, markEdit_component_1.MarkEditComponent,
            messages_component_1.MessageComponent, sentMessage_component_1.SentMessageComponent, messagesHistory_component_1.MessageHistoryComponent,
            studentDetails_component_1.StudentDetailsComponent, studentHome_component_1.StudentHomeComponent, studentInfo_component_1.StudentInfoComponent, studentRegister_component_1.StudentRegisterComponent,
            students_component_1.StudentsComponent, studentsByGroup_component_1.StudentsByGroupComponent, studentTutor_component_1.StudentsTutorComponent,
            subjects_component_1.SubjectsComponent, subjectAdd_component_1.SubjectAddComponent, mySubjectForTutor_component_1.SubjectsForTutorComponent, subjectDetails_component_1.SubjectDetailsComponent,
            tutorEdit_component_1.TutorEditComponent, tutorHome_component_1.TutorHomeComponent, tutorInfo_component_1.TutorInfoComponent, tutorRegister_component_1.TutorRegisterComponent, tutors_component_1.TutorsComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            ngx_dropdown_1.DropdownModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                {
                    path: 'admin-home', component: adminHome_component_1.AdminHomeComponent,
                    children: [
                        { path: '', redirectTo: 'info', pathMatch: 'full' },
                        { path: 'info', component: adminInfo_component_1.AdminInfoComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        {
                            path: 'student-details/:id',
                            component: studentDetails_component_1.StudentDetailsComponent,
                            canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin]
                        },
                        { path: 'administrators', component: administrators_component_1.AdministratorsComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'addAdmin', component: adminRegister_component_1.AdminRegisterComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'addStudent', component: studentRegister_component_1.StudentRegisterComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'addTutor', component: tutorRegister_component_1.TutorRegisterComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'addGroup', component: groupAdd_component_1.GroupAddComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'addSubject', component: subjectAdd_component_1.SubjectAddComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'students', component: students_component_1.StudentsComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'tutors', component: tutors_component_1.TutorsComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'groups', component: groups_component_1.GroupComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'mark-edit/:id', component: markEdit_component_1.MarkEditComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'messages/:id', component: messages_component_1.MessageComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'sentMessages/:id', component: sentMessage_component_1.SentMessageComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'historyMessages/:id/:userId', component: messagesHistory_component_1.MessageHistoryComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'subjects', component: subjects_component_1.SubjectsComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'faculties', component: faculties_component_1.FacultyComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: 'addfaculty', component: facultyAdd_component_1.FacultyAddComponent, canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] },
                        { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [LoggedInGuardAdmin_1.LoggedInGuardAdmin] }
                    ]
                },
                {
                    path: 'student-home', component: studentHome_component_1.StudentHomeComponent,
                    children: [
                        { path: '', redirectTo: 'info', pathMatch: 'full' },
                        { path: 'info', component: studentInfo_component_1.StudentInfoComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'student-details/:id', component: studentDetails_component_1.StudentDetailsComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'marks/:id', component: marks_component_1.MarkComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'messages/:id', component: messages_component_1.MessageComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'sentMessages/:id', component: sentMessage_component_1.SentMessageComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'historyMessages/:id/:userId', component: messagesHistory_component_1.MessageHistoryComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'students', component: students_component_1.StudentsComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: 'tutors', component: tutors_component_1.TutorsComponent, canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] },
                        { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [LoggedInGuardStudenet_1.LoggedInGuardStudent] }
                    ]
                },
                {
                    path: 'tutor-home', component: tutorHome_component_1.TutorHomeComponent,
                    children: [
                        { path: '', redirectTo: 'info', pathMatch: 'full' },
                        { path: 'info', component: tutorInfo_component_1.TutorInfoComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'students-tutor', component: studentTutor_component_1.StudentsTutorComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'student-details/:id', component: studentDetails_component_1.StudentDetailsComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'groups', component: groups_component_1.GroupComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'addMark/:id', component: markAdd_component_1.MarkAddComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'messages/:id', component: messages_component_1.MessageComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'sentMessages/:id', component: sentMessage_component_1.SentMessageComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'historyMessages/:id/:userId', component: messagesHistory_component_1.MessageHistoryComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'mark-edit/:id', component: markEdit_component_1.MarkEditComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'faculties', component: faculties_component_1.FacultyComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'subjects/:id', component: mySubjectForTutor_component_1.SubjectsForTutorComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'subject-details/:id', component: subjectDetails_component_1.SubjectDetailsComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'students-group/:id', component: studentsByGroup_component_1.StudentsByGroupComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'students', component: students_component_1.StudentsComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: 'tutors', component: tutors_component_1.TutorsComponent, canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] },
                        { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [LoggedInGuardTutor_1.LoggedInGuardTutor] }
                    ]
                },
                { path: 'login', component: login_component_1.LoginComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
                { path: 'register', component: register_component_1.RegisterComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] },
                { path: 'home', component: home_component_1.HomeComponent, canActivate: [LoggedInGuard_1.LoggedInGuard] }
            ], { useHash: true })
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map