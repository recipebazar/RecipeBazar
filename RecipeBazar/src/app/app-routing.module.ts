import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpmaComponent } from './upma/upma.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'upma',
    component: UpmaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
