import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieServiceService } from './../../services/cookie-service.service';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isadminloggedin: boolean = false;
  name: string = "";
  subscribe: any = "";
  email: string= "";

  constructor(private cookie: CookieServiceService, private router: Router, private api: ApiServiceService) { }

  ngOnInit(): void {
    if (this.cookie.get("usertype") == "") {
      this.isadminloggedin = false;
    }
    else {
      this.isadminloggedin = true;
      // this.name = this.cookie.get("name");
    }

    this.subscribe = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required]))
    });

  }

  subscription(subscribe: any) {
    let data = { data: subscribe };
    this.api.post("subscription/save", data).subscribe((data: any) => {
      this.email = data.email;
      alert("Subscribed");
      window.location.href="/";
    });
  }



}
