import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  // courses = []
  @Input() courses;
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()
  // constructor() { }

  // ngOnInit(): void {
  // }


}
