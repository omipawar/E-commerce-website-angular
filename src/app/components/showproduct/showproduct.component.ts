import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  showform: boolean = false;
  order: any;
  data: any;
  id: string | null = "0";
  baseurl = this.api.baseurl;
  date: Date = new Date();
  price: string = "";
  orderstatus: string = "Pending";
  productid: string = "";
  shipping: string = "";
  status: string = "";
  totalamount: any;
  total: any;
  imagepath:any;

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id == null)
      this.id = "0";
    if (this.id != "0") {
      this.api.post("product/get", { data: { id: this.id } }).subscribe((data: any) => {
        this.data = data.data;
        this.price = data.data.price;
        this.imagepath = data.data.imagepath;

        this.order = new FormGroup({
          id: new FormControl(""),
          productid: new FormControl(this.id, Validators.compose([Validators.required])),
          orderdate: new FormControl(this.date, Validators.compose([Validators.required])),
          name: new FormControl("", Validators.compose([Validators.required])),
          email: new FormControl("", Validators.compose([Validators.required])),
          address: new FormControl("", Validators.compose([Validators.required])),
          mobileno: new FormControl("", Validators.compose([Validators.required])),
          pincode: new FormControl("", Validators.compose([Validators.required])),
          size: new FormControl("", Validators.compose([Validators.required])),
          color: new FormControl("", Validators.compose([Validators.required])),
          quantity: new FormControl("1", Validators.compose([Validators.required])),
          price: new FormControl(this.price, Validators.compose([Validators.required])),
          shipping: new FormControl("Pending", Validators.compose([Validators.required])),
          total: new FormControl(this.price, Validators.compose([Validators.required])),
          status: new FormControl("Pending", Validators.compose([Validators.required])),
          imagepath: new FormControl(this.imagepath, Validators.compose([Validators.required]))
        })
      });
    }
  }

  show() {
    this.showform = true;
    window.scroll(0,1000);
  }

  submit(order: any): void {
    console.log(order);
    let data = { data: order };
    this.api.post("order/place", data).subscribe((data: any) => {
      alert("Order Placed........!");
      window.location.href="products";
    })
  }

  totals(event: Event) {
    let ctrl = <HTMLSelectElement>event.target;
    let no = Number(ctrl.value);
    let prodprice = Number(this.price);
    this.totalamount = prodprice * no;
  }

}
