import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { FieldComponent } from '../field/field.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'field', component: FieldComponent},
  {path:'404', component: NotFoundComponent},
  {path:'**', redirectTo:'/404'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
      RouterModule
  ]
})
export class RoutingModule { }
