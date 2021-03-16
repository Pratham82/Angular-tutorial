import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/'
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }
  private model = 'courses'

  all() {
    // return this.courses
    return this.http.get(this.getUrl())
  }

  create(course) {
    // console.log('CREATE COURSE', course)
    return this.http.post(this.getUrl(), course)
  }

  find(courseId) {
    return this.http.get(this.getUrlById(courseId))

  }

  update(course) {
    return this.http.put(this.getUrlById(course.id), course)
  }

  delete(courseId) {
    console.log(courseId);
    return this.http.delete(`${this.getUrlById(courseId)}`)
  }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }

}
