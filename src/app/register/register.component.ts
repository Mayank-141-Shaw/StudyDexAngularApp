import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  images = {
    'bluebook': "assets/Images/bluebook_new.png"
  }

  registerForm:FormGroup = new FormGroup({});
  usermail:string = "";
  password:string = "";
  conPassword:string = "";

  constructor(private users:UserService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      usermail : new FormControl("", [Validators.email]),
      password : new FormControl(""),
      conPassword : new FormControl("1")
    })

  }

  private matchPassword(registerForm:FormGroup):boolean{
    if(registerForm.get("password")?.value == registerForm.get("conPassword")?.value)
      return true;
    return false;
  }

  onSubmit(){
    if(this.matchPassword(this.registerForm)){
      // put the user given data in users.json
      this.users.addNewUser(this.registerForm.get("usermail")?.value, this.registerForm.get("password")?.value);
      // then redirect to login page
      this.router.navigate(['/login']);
    }else{
      // password incorrect try again
      window.alert(`Password does not match. Try again`);
      // keep on same page
    }
  }

}
