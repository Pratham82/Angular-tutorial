import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Update the form to show percentComplete
  // STEP 02: Update the form to show favorite

  selectedCourse = null;

  courses = null

  // Here we are injecting the coursesService
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses()
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    // this.selectedCourse = this.coursesService.all();
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  refreshCourse() {
    this.resetSelectedCourse()
    this.loadCourses()
  }

  loadCourses() {
    this.coursesService.all().subscribe(courses => this.courses = courses)
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course).subscribe(res => this.refreshCourse())
    } else {
      this.coursesService.create(course).subscribe(res => this.refreshCourse())
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId).subscribe(res => this.refreshCourse())
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
