import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  private courses = [
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
      description: 'Worship Will Sentence',
      percentComplete: 50,
      favorite: true
    }
  ];

  all() {
    return this.courses
  }

  create(course) {
    console.log('CREATE COURSE', course)
  }

  find(courseId) {
    console.log('FIND COURSE', courseId)

  }

  update(course) {
    console.log('UPDATE COURSE', course)
  }

  delete(courseId) {

    console.log('DELETE COURSE', courseId)
  }

}
