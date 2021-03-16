import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson = null;
  courseLessons = null


  // When we add the access modifier to another class it will add it as a member of current class
  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.allLessons();
  }


  selectLesson(lesson) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}
