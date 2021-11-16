import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean;
  constructor(private session:SessionService, private router:Router) { 
    this.isLoggedIn = session.isLoggedIn();
  }

  ngOnInit(): void {
  }

  checkLogIn(){
    if(this.isLoggedIn) this.router.navigate(['/home']);
    else this.router.navigate(['/login']);
  }

  doLogOut(){
    if(this.isLoggedIn){
      this.session.logOut();
      this.router.navigate(['/login']);
    } else{
      this.router.navigate(['/login']);
    }
  }

}
