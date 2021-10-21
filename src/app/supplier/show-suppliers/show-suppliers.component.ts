import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-suppliers',
  templateUrl: './show-suppliers.component.html',
  styleUrls: ['./show-suppliers.component.css']
})
export class ShowSuppliersComponent implements OnInit {

  constructor(private service:SharedService) { }
  SupplierList:any=[];

  ngOnInit(): void {
    this.refreshSupList();
    
  }
 
  refreshSupList()
  {
    this.service.getSupList().subscribe(data=>{
      this.SupplierList=data;
    })
  }
  

}
