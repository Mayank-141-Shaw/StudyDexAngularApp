import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  images = {
    'bluebook': "assets/Images/bluebook_new.png"
  }

  loginForm:FormGroup = new FormGroup({});
  usermail:string = "";
  password:string = "";

  userArray:{email:string, password:string}[] = [];
  constructor(private users:UserService, private router:Router, private session:SessionService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usermail : new FormControl(),
      password : new FormControl()
    })
  }

  temp:{email:string, password:string} = {email:"", password:""};
  onSubmit(){
    // get the users array
    this.userArray = this.users.getUsers();
    console.log(this.userArray);
    // check if given data is present in the array or not
    this.temp = this.userArray.filter((data) => (data.email != this.loginForm.get("usermail")?.value))[0];
    console.log(`temp : ${this.temp.email} ${this.temp.password}`);
    // if present navigate to home page
    // create a session to track it
    if(this.temp.email != null){
      this.session.login(this.temp.email, this.temp.password);
      this.router.navigate(['/home']);
    }else{
      window.alert(`User does not exist`);
    }
    

    // else say user does not exist
  }

}
