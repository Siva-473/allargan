import { Routes, RouterModule } from '@angular/router';
import {SuccessComponent} from './allergan/success'
import { HomeComponent } from './home';
import{AdminComponent} from './admin'
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './guards';
import {UserprofileComponent } from './userprofile';
import {BasecampComponent} from './allergan/basecamp'
import {LoadComponent} from './allergan/load'
import{MainpageComponent} from './allergan/mainpage';
import{CompletedCoursesComponent} from './allergan/completed-courses'
import{CompletedassetsComponent} from './allergan/completedassets'
import{AssetsmapComponent} from './allergan/topics/assetsmap'
import{UnassinedAssetsComponent} from './allergan/unassined-assets';
import{CoreProductTrainingComponent} from './allergan/topics/core-product-training'
import{FieldToolTrainingComponent} from './allergan/topics/field-tool-training'
import{CoreDiseaseTrainingComponent} from './allergan/topics/core-disease-training'
import{ComplianceWireComponent} from './allergan/topics/compliance-wire'
import{MedicalMeetingsComponent} from './allergan/topics/medical-meetings'
import{NotShownAssignedAssetsComponent} from './allergan/not-shown-assigned-assets';
import { CoreTrainingComponent } from './allergan/topics/core-training';
import { NewHireTrainingComponent } from './allergan/topics/new-hire-training';
import { LaunchTrainingComponent } from './allergan/topics/launch-training';
import { QuizTopicComponent } from './allergan/topics/quiz-topics/quiz-topic.component';
import{RouteRoutingModule} from './admin/route/route-routing'

import{ Role} from './models'

import{ from } from 'rxjs';
import { PointsBadgesComponent } from './allergan/points-badges';



const appRoutes: Routes = [
    { path: 'allergan', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'update/profile', component: UserprofileComponent, canActivate: [AuthGuard] },
    { path: 'basecamp', component: BasecampComponent, canActivate: [AuthGuard] },
    { path: 'main', component: MainpageComponent, canActivate: [AuthGuard] },
    { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
    { path: 'load', component: LoadComponent, canActivate: [AuthGuard] },
    { path: 'completed/courses', component: CompletedCoursesComponent, canActivate: [AuthGuard] },
    { path: 'topic', component: AssetsmapComponent, canActivate: [AuthGuard] },
    { path: 'cpt', component: CoreProductTrainingComponent, canActivate: [AuthGuard] },
    { path: 'ftt', component: FieldToolTrainingComponent, canActivate: [AuthGuard] },
    { path: 'cdt', component: CoreDiseaseTrainingComponent, canActivate: [AuthGuard] },
    { path: 'cw', component: ComplianceWireComponent, canActivate: [AuthGuard] },
    { path: 'completed/assets', component: CompletedassetsComponent,canActivate: [AuthGuard] },
    { path: 'unassigned/assets', component: UnassinedAssetsComponent,canActivate: [AuthGuard] },
    {path: 'notshown/assigned/assets',component:NotShownAssignedAssetsComponent,canActivate: [AuthGuard]},
    {path: 'quiz/assets',component:QuizTopicComponent,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'mm', component:MedicalMeetingsComponent},
    {path: 'ct', component:CoreTrainingComponent},
    {path: 'nht', component:NewHireTrainingComponent},
    {path: 'lt', component:LaunchTrainingComponent},
    {path: 'points/badges', component:PointsBadgesComponent,canActivate: [AuthGuard]},
    {
        path: 'not-found',
        loadChildren: './directives/not-found/not-found-routing.module#NotFoundRoutingModule'
      },
    // otherwise redirect to home
    { path: 'admin', 
    loadChildren: './admin/route/route-routing#RouteRoutingModule',
    canActivate: [AuthGuard],
    data: { roles: ['admin','manager']}
    },
    { path: '', redirectTo: 'allergan' , pathMatch: 'full'},
    {
        path: '**',
        redirectTo: 'not-found'
      }

    
];
//,enableTracing:true
export const routing = RouterModule.forRoot(appRoutes, { useHash: true });