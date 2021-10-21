import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Supplier } from '../_interfaces/supplier.module';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit{
  constructor() { }

  
  ngOnInit(): void {
  }

  

}
