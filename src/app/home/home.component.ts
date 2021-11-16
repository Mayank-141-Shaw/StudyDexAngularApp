import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser:{email:string, password:string} = {email:"", password:""};
  _courses:{
        id:string,
        title:string,
        author:string,
        rating:string,
        user_count:string,
        desc:string,
        price:string,
        img:string
  }[] = [];

  constructor(private courses:CourseService, private session:SessionService) { 
    this.currentUser = session.getCurrentUser();
  }

  ngOnInit(): void {
    this._courses = this.courses.getCourses();
    this.currentUser = this.session.getCurrentUser();
    console.log(this.currentUser);
  }

}
