import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './directives';
import { AuthGuard } from './guards';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AlertService, AuthenticationService, UserService, CommonService } from './services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';;
import { NavbarService } from './navbar.service';;
import { UserprofileComponent } from './userprofile/userprofile.component'
;
import { BasecampComponent } from './allergan/basecamp/basecamp.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SuccessComponent } from './allergan/success/success.component';;
import { LoadComponent } from './allergan/load/load.component';
import { ClickOutsideModule } from 'ng-click-outside';

import { TherapeuticareasComponent } from './allergan/therapeuticareas/therapeuticareas.component';
import { MainpageComponent } from './allergan/mainpage/mainpage.component';
import { TopicsComponent } from './allergan/topics/topics.component';
import { CompletedassetsComponent } from './allergan/completedassets/completedassets.component';
import { UnassinedAssetsComponent } from './allergan/unassined-assets/unassined-assets.component';
import { AssetsmapComponent } from './allergan/topics/assetsmap/assetsmap.component';
import { AlertForTopicsComponent} from './allergan/topics/alertForTopics';
import { CompletedCoursesComponent } from './allergan/completed-courses/completed-courses.component';
import { CoreProductTrainingComponent } from './allergan/topics/core-product-training/core-product-training.component';
import { CoreDiseaseTrainingComponent } from './allergan/topics/core-disease-training/core-disease-training.component';
import { FieldToolTrainingComponent } from './allergan/topics/field-tool-training/field-tool-training.component';
import { ComplianceWireComponent } from './allergan/topics/compliance-wire/compliance-wire.component';;
import { TopManuComponent } from './allergan/topics/top-manu/top-manu.component';
import {MedicalMeetingsComponent } from './allergan/topics/medical-meetings';
import { NotShownAssignedAssetsComponent } from './allergan/not-shown-assigned-assets/not-shown-assigned-assets.component'
import { CoreTrainingComponent } from './allergan/topics/core-training';
import { NewHireTrainingComponent } from './allergan/topics/new-hire-training';

import { GroupService } from './admin/services/groupservice';
import { sharedservice } from './admin/services/sharedservice';
import { MetaDataService } from './admin/services/metadataService';
import {AssetService} from './admin/services/assetservices';
import {QuestionBankService} from './admin/services/questionbankservice'
import {BatchImportService} from './admin/services/batchimportservice'
import { LaunchTrainingComponent } from './allergan/topics/launch-training/launch-training.component';
import { AppHeaderNavComponent } from './allergan/app-header-nav';
import { QuizService } from './admin/services/quizservice';
import { QuizTopicComponent } from './allergan/topics/quiz-topics/quiz-topic.component';
import { SharedModule } from './allergan/shared/shared.module';
import { HashLocationStrategy } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
//import { PointsBadgesComponent } from './allergan/points-badges/points-badges.component'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ClickOutsideModule,
        routing,
        NgMultiSelectDropDownModule.forRoot(),
        SharedModule
,
        TypeaheadModule.forRoot()        
    ],

    declarations: [
        AppComponent,
        AlertComponent,       
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserprofileComponent,
        BasecampComponent ,
        SuccessComponent ,
        LoadComponent ,
        TherapeuticareasComponent ,
        MainpageComponent,TopicsComponent, 
        UnassinedAssetsComponent, 
        CompletedassetsComponent,
        AlertForTopicsComponent,
        AssetsmapComponent,
        CompletedCoursesComponent, 
        CoreProductTrainingComponent, 
        CoreDiseaseTrainingComponent,
         FieldToolTrainingComponent, 
         ComplianceWireComponent, 
         TopManuComponent,
         MedicalMeetingsComponent,
         NotShownAssignedAssetsComponent,
         CoreTrainingComponent, 
         NewHireTrainingComponent,
         LaunchTrainingComponent,
	     QuizTopicComponent,
	    // PointsBadgesComponent
       //  AppHeaderNavComponent
         ],
    providers: [
        AuthGuard,
        NavbarService,        
        AlertService,
        AuthenticationService,
        UserService,
        GroupService,
        sharedservice,
        CommonService,
        MetaDataService,
        QuestionBankService,
        AssetService,
        QuizService,
        BatchImportService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HashLocationStrategy, useClass: HashLocationStrategy}

    ],

    bootstrap: [AppComponent]
})

export class AppModule { }