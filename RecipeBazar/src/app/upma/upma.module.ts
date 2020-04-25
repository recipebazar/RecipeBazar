import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpmaComponent } from './upma.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UpmaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UpmaModule { }
