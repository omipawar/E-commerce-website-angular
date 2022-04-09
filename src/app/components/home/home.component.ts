import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from './../../services/api-service.service';
import { Router } from '@angular/router';
import { CookieServiceService } from './../../services/cookie-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscribe: any = "";
  email: string= "";

  constructor(private cookie: CookieServiceService, private router: Router, private api: ApiServiceService) { }

  ngOnInit(): void {

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
