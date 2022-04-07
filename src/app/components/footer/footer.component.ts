import { Router } from '@angular/router';
import { CookieServiceService } from './../../services/cookie-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isadminloggedin: boolean = false;
  name: string = "";

  constructor(private cookie: CookieServiceService, private router: Router) { }

  ngOnInit(): void {
    if (this.cookie.get("usertype") == "") {
      this.isadminloggedin = false;
    }
    else {
      this.isadminloggedin = true;
      // this.name = this.cookie.get("name");
    }
  }

 

}
