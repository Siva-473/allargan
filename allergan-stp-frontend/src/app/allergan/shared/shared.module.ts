import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppHeaderNavComponent } from '../app-header-nav';
import { RouterModule } from '@angular/router';
import { PointsBadgesComponent } from '../points-badges';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    RouterModule
  ],
  declarations: [AppHeaderNavComponent,PointsBadgesComponent
  ],
  exports:[
    CommonModule,
    PointsBadgesComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppHeaderNavComponent,
  ]
})
export class SharedModule { }
