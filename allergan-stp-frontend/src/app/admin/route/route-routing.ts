import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { AuthGuard } from 'src/app/guards';
import { AdminSideNavComponent } from '../admin-side-nav/admin-side-nav.component';
import { AdminTopNavComponent } from '../admin-top-nav/admin-top-nav.component';
import { CommonModule } from '@angular/common';

import { EditUserComponent } from '../home/edit-user'
import { GroupComponent } from '../home/groups/group.component';
import { GroupMappingComponent } from '../home/group-mapping/group.mapping.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuestionBankComponent } from '../home/question-bank/question-bank.component';
import { SharedModule } from 'src/app/allergan/shared/shared.module';
import { AssetsComponent } from '../home/assets';
import { QuizComponent } from '../home/quiz/quiz.component';
import { AddAssetComponent } from '../home/assets/add-asset';
import { AddQuizComponent } from '../home/add-quiz/add-quiz.component';
import { EditQuizComponent } from '../home/edit-quiz/edit-quiz.component';
import { CloneQuizComponent } from '../home/clone-quiz/clone-quiz.component';
import { BatchImportComponent } from '../home/batch-import/batch-import.component';
import { AddQuestionComponent } from '../home/add-question/add-question.component';
import { EditQuestionComponent } from '../home/edit-question/edit-question.component';
import { EditAssetComponent } from '../home/assets/edit-asset/edit-asset.component';
import { NumbersOnlyDirective } from '../home/assets/add-asset/OnlynumberDirective';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  imports: [
    // CommonModule,
    // ReactiveFormsModule,
    // FormsModule,
    ClickOutsideModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forChild([

      { path: '', component: AdminComponent },
      { path: 'user/edit/:id', component: EditUserComponent },
      { path: 'user/edit', component: EditUserComponent },
      { path: 'group', component: GroupComponent },
      { path: 'group/map', component: GroupMappingComponent },
      { path: 'questionBank', component: QuestionBankComponent },
      { path: 'asset', component: AssetsComponent },
      { path: 'questionBank', component: QuestionBankComponent },
      { path: 'question/add', component: AddQuestionComponent },
      { path: 'question/edit/:id', component: EditQuestionComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'asset/add', component: AddAssetComponent },
      { path: 'quiz/add', component: AddQuizComponent },
      { path: 'edit/asset/:assetId', component: EditAssetComponent },
      { path: 'quiz/clone/:id', component: CloneQuizComponent },
      { path: 'quiz/edit/:id', component: EditQuizComponent },
      { path: 'batchimport', component: BatchImportComponent },


    ])],
  declarations: [
    AdminComponent,
    AdminSideNavComponent,
    AdminTopNavComponent,
    EditUserComponent,
    GroupComponent,

    NumbersOnlyDirective,
    GroupMappingComponent,
    QuestionBankComponent,
    AssetsComponent,
    QuizComponent,
    AddAssetComponent,
    QuizComponent,
    AddQuizComponent,
    EditQuizComponent,
    CloneQuizComponent,
    AddQuestionComponent,
    BatchImportComponent,
    EditQuestionComponent,
    EditAssetComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
