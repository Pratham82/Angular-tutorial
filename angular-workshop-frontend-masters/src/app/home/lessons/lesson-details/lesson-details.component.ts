import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent {

  @Input() localLesson
}
