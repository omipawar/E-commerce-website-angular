import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  products : any;
  constructor(public api:ApiServiceService) { }

  ngOnInit(): void {
    this.api.post("product/list",{}).subscribe((data:any)=>{
      this.products = data.data;
    })
  }

}
