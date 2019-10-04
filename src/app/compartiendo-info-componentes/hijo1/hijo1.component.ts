import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-hijo1",
  templateUrl: "./hijo1.component.html",
  styleUrls: ["./hijo1.component.css"]
})
export class Hijo1Component implements OnInit {

  @Output() emitEvent = new EventEmitter<boolean>();
  estado: boolean = false;

  constructor() {}

  ngOnInit() {
    this.function1();
  }

  public function1() {
    let fResponse = !this.estado;
    this.estado = fResponse;
    this.emitEvent.emit(fResponse);
  }
}
