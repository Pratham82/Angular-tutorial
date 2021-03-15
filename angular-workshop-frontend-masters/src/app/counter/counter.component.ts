import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  numberVal = 0

  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    this.numberVal = this.numberVal + 1
  }
  decrement() {
    this.numberVal = this.numberVal > 0 ? this.numberVal - 1 : this.numberVal = 0
  }

}
