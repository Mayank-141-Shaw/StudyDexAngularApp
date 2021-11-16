import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses = [{
        id: 'python1',
        title: 'Python Bootcamp Complete 2021',
        author: 'Jose Pimann',
        rating: '4.5',
        user_count: '123,456',
        desc: 'This is a premium python course created by Pyhton ML professional developer Jose Pimann. He is an ex-Google dev and now working in learning and development. This course provides fundamental concepts of python from beginner to advanced covering most of the trends and topics in the world of python.',
        price: '$99',
        img: "../../assets/Images/python_ml_header.png"
},  {
        id: 'design1',
        title: 'Online Graphic Design Course: The Comprehensive Guide',
        author: 'Adobe INC.',
        rating: '4.5',
        user_count: '123,456',
        desc: 'A comprehensive course about design and drawing',
        price: '$99',
        img: "../../assets/Images/graphic-course.jpg"
},{
  id: 'design2',
  title: 'Online Graphic Design Course',
  author: 'Adobe INC.',
  rating: '4.5',
  user_count: '153,712',
  desc: 'A comprehensive course about design and drawing',
  price: '$99',
  img: "../../assets/Images/image-course.jpg"
}];

  constructor() { }

getCourses(){
  return this.courses;
}

getCourseFromID(id:string|null):any{
  return this.courses.find(c => c.id == id);
}
}
