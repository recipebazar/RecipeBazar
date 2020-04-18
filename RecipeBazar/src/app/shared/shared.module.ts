import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TopNavBarComponent
  ]
})
export class SharedModule { }
