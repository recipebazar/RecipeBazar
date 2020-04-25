import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpmaComponent } from './upma/upma.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BhindifryComponent } from './bhindifry/bhindifry.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'upma',
    component: UpmaComponent
  },
  {
    path: 'bhindifry',
    component: BhindifryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
