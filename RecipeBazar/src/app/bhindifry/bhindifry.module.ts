
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BhindifryComponent } from './bhindifry.component';

@NgModule({
  declarations: [
    BhindifryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BhindifryModule { }
