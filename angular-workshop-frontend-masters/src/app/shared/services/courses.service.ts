import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/'
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }
  private model = 'courses'
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
    // return this.courses
    return this.http.get(this.getUrl())
  }

  create(course) {
    // console.log('CREATE COURSE', course)
    return this.http.post(this.getUrl(), course)
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

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

}
