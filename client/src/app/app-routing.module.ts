import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';

// angular routing is just based off of the state of the url in the browser.
// the '/' is assumed. below are two routes, '/' and '/new'. '**' is a wildcard,
// all unknowns will send to the value of redirectTo

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'new', component: NewComponent },
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
