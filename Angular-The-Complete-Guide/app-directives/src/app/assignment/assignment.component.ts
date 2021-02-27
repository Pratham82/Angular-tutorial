import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [`
    .overUsed {
      background-color: red
    }
    .whiteText{
      color: white
    }
  `]
})
export class AssignmentComponent implements OnInit {

  displayProp = true
  password = 'FisherEye'
  logs = []
  constructor() { }

  ngOnInit(): void {
  }

  switchDisplay() {
    return this.displayProp = !this.displayProp
  }

  onToggleDisplay() {
    this.switchDisplay()
    // this.logs.push(this.logs.length + 1)
    this.logs.push(new Date())
  }


}
