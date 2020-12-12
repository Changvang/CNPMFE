import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosListComponent } from './components/demos-list/demos-list.component';
import { DemoDetailsComponent } from './components/demo-details/demo-details.component';
import { AddDemoComponent } from './components/add-demo/add-demo.component';
import { AccomodationListComponent } from './components/accomodation-list/accomodation-list.component';
import { AddAccomodationComponent } from './components/add-accomodation/add-accomodation.component';

const routes: Routes = [
  { path: '', redirectTo: 'accomodation', pathMatch: 'full' },
  { path: 'demos', component: DemosListComponent },
  { path: 'demos/:id', component: DemoDetailsComponent },
  { path: 'add', component: AddDemoComponent },
  { path: 'accomodation' , component: AccomodationListComponent },
  { path: 'add-accomodation' , component: AddAccomodationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
