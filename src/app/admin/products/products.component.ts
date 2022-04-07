import { CookieServiceService } from './../../services/cookie-service.service';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  baseurl = this.api.baseurl;
  products: any;
  id: string = "";

  constructor(private api: ApiServiceService, private cookie: CookieServiceService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.api.post("product/list", { data: {} }).subscribe((mydata: any) => {
      this.products = mydata.data;
      console.log(this.products);

    });
  }

  delete(id: string): void {
    if (confirm("Sure to delete?")) {
      let data = { id: id };
      this.api.post("product/delete", { data: data }).subscribe((mydata: any) => {
        this.list();
      });
    }
  }

}
