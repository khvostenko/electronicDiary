import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes, Route, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DropdownModule } from "ngx-dropdown";
import 'rxjs/Rx';
import { AdministratorsComponent } from './components/administrator/administrators.component';
import { AdminRegisterComponent } from './components/administrator/adminRegister.component';
import { AdminInfoComponent } from './components/administrator/adminInfo.component';
import { AdminHomeComponent } from './components/administrator/adminHome.component';
import { AdminEditComponent } from './components/administrator/adminEdit.component';
import { FacultyComponent } from './components/faculty/faculties.component';
import { FacultyAddComponent } from './components/faculty/facultyAdd.component';
import { GroupAddComponent } from './components/group/groupAdd.component';
import { GroupComponent } from './components/group/groups.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarkComponent } from './components/mark/marks.component';
import { MarkEditComponent } from './components/mark/markEdit.component';
import { MarkAddComponent } from './components/mark/markAdd.component';
import { MessageComponent } from './components/message/messages.component';
import { SentMessageComponent } from './components/message/sentMessage.component';
import { MessageHistoryComponent} from './components/message/messagesHistory.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentDetailsComponent } from './components/student/studentDetails.component';
import { StudentsByGroupComponent } from './components/student/studentsByGroup.component';
import { StudentHomeComponent } from './components/student/studentHome.component';
import { StudentInfoComponent } from './components/student/studentInfo.component';
import { StudentRegisterComponent } from './components/student/studentRegister.component';
import { StudentsTutorComponent } from './components/student/studentTutor.component';
import { StudentsComponent } from './components/student/students.component';
import { SubjectsComponent } from './components/subject/subjects.component';
import { SubjectsForTutorComponent } from './components/subject/mySubjectForTutor.component';
import { SubjectAddComponent } from './components/subject/subjectAdd.component';
import { SubjectDetailsComponent } from './components/subject/subjectDetails.component';
import { TutorEditComponent } from './components/tutor/tutorEdit.component';
import { TutorHomeComponent } from './components/tutor/tutorHome.component';
import { TutorInfoComponent } from './components/tutor/tutorInfo.component';
import { TutorRegisterComponent } from './components/tutor/tutorRegister.component';
import { TutorsComponent } from './components/tutor/tutors.component';
import { LoggedInGuard } from './shared/LoggedInGuard';
import { LoggedInGuardAdmin } from './shared/LoggedInGuardAdmin';
import { LoggedInGuardStudent } from './shared/LoggedInGuardStudenet';
import { LoggedInGuardTutor } from './shared/LoggedInGuardTutor';


@
NgModule({
    bootstrap: [AppComponent],
    providers: [LoggedInGuard, LoggedInGuardAdmin, LoggedInGuardStudent, LoggedInGuardTutor],
    declarations: [
        AppComponent,
        HomeComponent,
        AdministratorsComponent, AdminEditComponent, AdminHomeComponent, AdminInfoComponent, AdminRegisterComponent,
        FacultyComponent, FacultyAddComponent,
        GroupAddComponent, GroupComponent,
        LoginComponent, RegisterComponent,
        MarkComponent, MarkAddComponent, MarkEditComponent,
        MessageComponent, SentMessageComponent, MessageHistoryComponent,
        StudentDetailsComponent, StudentHomeComponent, StudentInfoComponent, StudentRegisterComponent,
        StudentsComponent, StudentsByGroupComponent, StudentsTutorComponent,
        SubjectsComponent, SubjectAddComponent, SubjectsForTutorComponent, SubjectDetailsComponent,
        TutorEditComponent, TutorHomeComponent, TutorInfoComponent, TutorRegisterComponent, TutorsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        DropdownModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            {
                path: 'admin-home', component: AdminHomeComponent,
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
                    { path: 'info', component: AdminInfoComponent, canActivate: [LoggedInGuardAdmin] },
                    {
                        path: 'student-details/:id',
                        component: StudentDetailsComponent,
                        canActivate: [LoggedInGuardAdmin]
                    },
                    { path: 'administrators', component: AdministratorsComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'addAdmin', component: AdminRegisterComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'addStudent', component: StudentRegisterComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'addTutor', component: TutorRegisterComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'addGroup', component: GroupAddComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'addSubject', component: SubjectAddComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'students', component: StudentsComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'tutors', component: TutorsComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'groups', component: GroupComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'mark-edit/:id', component: MarkEditComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'messages/:id', component: MessageComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'sentMessages/:id', component: SentMessageComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'historyMessages/:id/:userId', component: MessageHistoryComponent, canActivate: [LoggedInGuardAdmin]},
                    { path: 'subjects', component: SubjectsComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'faculties', component: FacultyComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: 'addfaculty', component: FacultyAddComponent, canActivate: [LoggedInGuardAdmin] },
                    { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [LoggedInGuardAdmin] }
                ]
            },
            {
                path: 'student-home', component: StudentHomeComponent,
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
                    { path: 'info', component: StudentInfoComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'student-details/:id', component: StudentDetailsComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'marks/:id', component: MarkComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'messages/:id', component: MessageComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'sentMessages/:id', component: SentMessageComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'historyMessages/:id/:userId', component: MessageHistoryComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'students', component: StudentsComponent, canActivate: [LoggedInGuardStudent] },
                    { path: 'tutors', component: TutorsComponent, canActivate: [LoggedInGuardStudent] },
                    { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [LoggedInGuardStudent] }
                ]
            },
            {
                path: 'tutor-home', component: TutorHomeComponent,
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
                    { path: 'info', component: TutorInfoComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'students-tutor', component: StudentsTutorComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'student-details/:id', component: StudentDetailsComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'groups', component: GroupComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'addMark/:id', component: MarkAddComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'messages/:id', component: MessageComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'sentMessages/:id', component: SentMessageComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'historyMessages/:id/:userId', component: MessageHistoryComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'mark-edit/:id', component: MarkEditComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'faculties', component: FacultyComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'subjects/:id', component: SubjectsForTutorComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'subject-details/:id', component: SubjectDetailsComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'students-group/:id', component: StudentsByGroupComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'students', component: StudentsComponent, canActivate: [LoggedInGuardTutor] },
                    { path: 'tutors', component: TutorsComponent, canActivate: [LoggedInGuardTutor] },
                    { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [LoggedInGuardTutor] }
                ]
            },
            { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
            { path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard] },
            
            { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] }
        ], { useHash: true })]
})
export class AppModule {

}
