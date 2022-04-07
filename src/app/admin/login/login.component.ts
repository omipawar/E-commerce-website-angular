import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CookieServiceService } from 'src/app/services/cookie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;

  constructor(private api: ApiServiceService, private cookie: CookieServiceService, private router:Router) { }

  ngOnInit(): void {

    this.data = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))

    })
  }
  submit(data: any) {
    let mydata = {data : data};
    this.api.post("admin/login",mydata).subscribe((result:any)=>{
      if(result.data.status == "success"){
        this.cookie.set("usertype", "admin");
        this.cookie.set("name", result.data.admin.name);
        this.cookie.set("id", result.data.admin._id);
        // this.router.navigate(["./admin/product"]).then(()=>{
        //   window.location.reload();
        // });
        window.location.href="./admin/products"
      }
      else{
        alert("Invalid credentials");
      }
      console.log(data);

    })

  }

}
