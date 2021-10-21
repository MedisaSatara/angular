import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  constructor(private service:SharedService) { }
  OrderList:any=[];

  ngOnInit(): void {
    this.refreshOrdList();
  }
  refreshOrdList()
  {
    this.service.getOrdList().subscribe(data=>{
      this.OrderList=data;
    })
  }

}
