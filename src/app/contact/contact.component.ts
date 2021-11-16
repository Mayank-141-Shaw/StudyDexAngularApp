import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  links = {
    Microsoft:{
      link:"https://www.microsoft.com",
      img:"assets/Images/microsoft.png"
    },
    Twitter:{
      link:"https://www.twitter.com",
      img:"assets/Images/twitter.png"
    },
    Facebook:{
      link:"https://www.facebook.com",
      img:"assets/Images/facebook.png"
    },
    Google:{
      link:"https://www.google.com",
      img:"assets/Images/google.png"
    },
    Discord:{
      link:"https://www.discord.com",
      img:"assets/Images/discord.png"
    },
    Pinterest:{
      link:"https://www.pinterest.com",
      img:"assets/Images/pinterest.png"
    },
    YouTube:{
      link:"https://www.youtube.com",
      img:"assets/Images/youtube.png"
    },
    LinkedIn:{
      link:"https://www.linkedin.com",
      img:"assets/Images/linkedin.png"
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
