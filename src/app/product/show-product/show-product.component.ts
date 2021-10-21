import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private service:SharedService) { }
  ProductList:any=[];

  ngOnInit(): void {
    this.refreshProdList();
  }

  refreshProdList()
  {
    this.service.getProdList().subscribe(data=>{
      this.ProductList=data;
    })
  }
}
