import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subscription:any;
  
  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.api.post("subscription/list", { data: {} }).subscribe((mydata: any) => {
      this.subscription = mydata.data;

    });
  }

}
