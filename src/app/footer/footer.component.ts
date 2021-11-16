import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
} 
