import { Router } from '@angular/router';
import { CookieServiceService } from './../../services/cookie-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isadminloggedin: boolean = false;
  admin :boolean = false;
  constructor(private cookie: CookieServiceService) { }

  ngOnInit(): void {
    if (this.cookie.get("usertype") == "admin") {
      this.isadminloggedin = true;
      // console.log("ngoninit"+ this.isadminloggedin);

    }

  }

  logout() {
    this.cookie.delete("usertype");
    this.cookie.delete("name");
    this.cookie.delete("id");

    // this.router.navigate(["./"]).then(() => {
    //   window.location.href="../"

    // });
    window.location.href = "./";

  }

}
