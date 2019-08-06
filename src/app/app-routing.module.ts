import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testing1Component } from './css-grid-layout/testing1/testing1.component';


const routes: Routes = 
[
  { path: 'testing1', component: Testing1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
