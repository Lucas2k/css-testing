import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Testing1Component } from './css-grid-layout/testing1/testing1.component';
import { FilterComboComponent } from './angular-material/filter-combo/filter-combo.component';


const routes: Routes = [
  { path: "testing1", component: Testing1Component },
  { path: "combofilter", component: FilterComboComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
