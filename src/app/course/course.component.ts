import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  _course:{
    id:string,
    title:string,
    author:string,
    rating:string,
    user_count:string,
    desc:string,
    price:string,
    img:string
}|any = {};
  courseId:string|null = "";
  temp:string|null = "";
  constructor(private course:CourseService, private activeRoute:ActivatedRoute) {
    this.temp = activeRoute.snapshot.paramMap.get("cid");
    if(this.temp != null) this.courseId = this.temp;
    this._course = course.getCourseFromID(this.courseId);
   }

  ngOnInit(): void {
  }

}
