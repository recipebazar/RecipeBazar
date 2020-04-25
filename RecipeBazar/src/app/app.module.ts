import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { UpmaModule } from './upma/upma.module';
import { BhindifryComponent } from './bhindifry/bhindifry.component';
import { BhindifryModule } from './bhindifry/bhindifry.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UpmaModule,
    BhindifryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
