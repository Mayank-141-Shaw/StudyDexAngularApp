import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:{email:string, password:string}[]= [{
    email:"admin",
    password:"admin123"
  }];

  constructor() { }

  addNewUser(usermail:string, password:string){
    this.users.push( {email:usermail, password:password} );
  }
    
  getUsers(){
    return this.users;
  }

}
