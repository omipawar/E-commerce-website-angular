import { CookieServiceService } from './../../services/cookie-service.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  baseurl = this.api.baseurl;
  imagepath:any;
  product:any;
  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    this.list()
  }
  list() {
    this.api.post("order/list", { data: {} }).subscribe((mydata: any) => {
      this.orders = mydata.data;
      console.log(mydata.data[0].productid);

    });
  }


}
