import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-filter-combo",
  templateUrl: "./filter-combo.component.html",
  styleUrls: ["./filter-combo.component.css"]
})
export class FilterComboComponent implements OnInit {
  myControl = new FormControl();
  options: Institucion[] = [
    { id: "1", nombre: "One" },
    { id: "2", nombre: "Two" },
    { id: "3", nombre: "Three" }
  ];

  filteredOptions: Observable<Institucion[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user?: Institucion): String | undefined {
    return user ? user.nombre : undefined;
  }

  private _filter(name: string): Institucion[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

  interface Institucion{
     id:String;
     nombre:String;
  }
