import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from './modules/app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterComboComponent } from './angular-material/filter-combo/filter-combo.component';
import { Testing1Component } from './css-grid-layout/testing1/testing1.component';
import { PadreComponent } from './compartiendo-info-componentes/padre/padre.component';
import { Hijo1Component } from './compartiendo-info-componentes/hijo1/hijo1.component';
import { Hijo2Component } from './compartiendo-info-componentes/hijo2/hijo2.component';


@NgModule({
  declarations: [AppComponent, Testing1Component, FilterComboComponent, PadreComponent, Hijo1Component, Hijo2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
