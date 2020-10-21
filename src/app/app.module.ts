import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

import { VerficationComponent } from './verfication/verfication.component';
import { SendRequestforVerificationComponent } from './send-requestfor-verification/send-requestfor-verification.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';
import { WaitingComponent } from './waiting/waiting.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { TrainingCenterRegisterComponent } from './training-center-register/training-center-register.component';
import { SendRequestCompanyComponent } from './send-request-company/send-request-company.component';
import { SendRequestCenterComponent } from './send-request-center/send-request-center.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { RegisterCompaniesComponent } from './register-companies/register-companies.component';
import { TcsignupComponent } from './tcsignup/tcsignup.component';
import { LoginTcComponent } from './login-tc/login-tc.component';
import { LoginCompaniesComponent } from './login-companies/login-companies.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentProfilComponent } from './student-profil/student-profil.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { ProfilTcComponent } from './profil-tc/profil-tc.component';
import { EditStudentProfileComponent } from './edit-student-profile/edit-student-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { PostComapnyComponent } from './post-comapny/post-comapny.component';
import { PostCenterComponent } from './post-center/post-center.component';
import { FeedComponent } from './feed/feed.component';
import { PostsToFeedComponent } from './posts-to-feed/posts-to-feed.component';
import { TrainingCenterEditComponent } from './training-center-edit/training-center-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VerficationComponent,
    SendRequestforVerificationComponent,
    AdminVerificationComponent,
    WaitingComponent,
    LandingComponent,
    CompanyRegisterComponent,
    TrainingCenterRegisterComponent,
    SendRequestCompanyComponent,
    SendRequestCenterComponent,
    StudentRegisterComponent,
    RegisterCompaniesComponent,
    TcsignupComponent,
    LoginTcComponent,
    LoginCompaniesComponent,
    StudentLoginComponent,
    StudentProfilComponent,
    ProfileCompanyComponent,
    ProfilTcComponent,
    EditStudentProfileComponent,
    SearchResultComponent,
    CompanyEditComponent,
    PostComapnyComponent,
    PostCenterComponent,
    FeedComponent,
    PostsToFeedComponent,
    TrainingCenterEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
