import { Component, OnInit, ViewChild } from '@angular/core';
import { Hijo1Component } from '../hijo1/hijo1.component';
import { Hijo2Component } from '../hijo2/hijo2.component';

@Component({
  selector: "app-padre",
  templateUrl: "./padre.component.html",
  styleUrls: ["./padre.component.css"]
})
export class PadreComponent implements OnInit {
  @ViewChild("child1", { static: false }) childOne: Hijo1Component;
  @ViewChild("child2", { static: false }) childTwo: Hijo2Component;

  constructor() {}

  ngAfterViewInit() {
    this.childOne.emitEvent.subscribe(res => {
      this.childTwo.dataShared = res;
    });
  }

  ngOnInit() {
   
  }
  change() {
    this.childOne.function1();
  }
}
