import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { RecipeSocialMediaComponent } from './recipe-social-media/recipe-social-media.component';

@NgModule({
  declarations: [
    FooterComponent,
    TopNavBarComponent,
    RecipeSocialMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FooterComponent,
    TopNavBarComponent,
    RecipeSocialMediaComponent
  ]
})
export class SharedModule { }
