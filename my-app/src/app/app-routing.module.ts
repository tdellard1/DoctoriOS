import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';


const routes: Routes = 
[

  {path:'', 
component: AppointmentPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
