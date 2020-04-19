import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FooterComponent,
    TopNavBarComponent
  ]
})
export class SharedModule { }
