import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
    id: null,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // 1 - Render course list
  // 2 - Select a course
  // 3 - Render selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'TypeScript Fundamentals',
      description: 'Learn the fundamentals of TypeScript',
      percentComplete: 0,
      favorite: false
    }
  ];

  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course){
    this.selectedCourse = {...course};
    this.originalTitle = course.title;
  }

  saveCourse(course){
    console.log('SAVE COURSE', course);
    
  }

  deleteCourse(courseId) {
    console.log('DELETE COURSE', courseId);
  }

  reset() {
    this.selectCourse({...emptyCourse});
  }

}
