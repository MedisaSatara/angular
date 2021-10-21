import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:44322/api";
  
  constructor(private http:HttpClient) { }

  getSupList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/supplier/showsuppliers');
  }
  /*public getSupList=(route:string)=>
  {
    this.http.get(route);
  }*/
  getProdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/product/showproduct');
  }
  getOrdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Order/ShowOrders');
  }
  
}
