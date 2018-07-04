import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

export const route: Routes = [
  {
      path: 'contact',
      component: ContactComponent,
  },
  {
    path: '**',
    component: HomeComponent,
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const RoutableComponents = [
  HomeComponent,
  ContactComponent
];
