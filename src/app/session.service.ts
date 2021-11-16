import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private currentUser:{email:string, password:string} = {email:"1", password:"1"};
  private isLogIn:boolean = false;
  constructor() { }
  
  login(email:string, password:string){
    this.currentUser.email = email;
    this.currentUser.password = password;
    this.isLogIn = true;
  }

  isLoggedIn():boolean{
    return this.isLogIn;
  }

  logOut(){
    this.currentUser.email = "";
    this.currentUser.password = "";
    this.isLogIn = false;
    console.log("logout:"+this.isLogIn);
  }

  getCurrentUser(){
    return this.currentUser;
    }
}
