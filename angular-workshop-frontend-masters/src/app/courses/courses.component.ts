import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course
  selectedCourse = null
  numberVal = 0


  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse()
  }

  selectCourse(course) {
    console.log(course);
    this.selectedCourse = course

  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.selectedCourse = emptyCourse
  }

  deleteCourse(id) {
    console.log(id)
  }

  cancel() {
    this.resetSelectedCourse()
  }

  increment() {
    this.numberVal = this.numberVal + 1
  }
  decrement() {
    this.numberVal = this.numberVal > 0 ? this.numberVal - 1 : this.numberVal = 0
  }

  saveCourse(currentCourse) {
    console.log(currentCourse)
    console.log('Save course called');

  }


}
