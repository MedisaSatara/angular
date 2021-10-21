import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'supplier',component:SupplierComponent},
  {path:'product',component:ProductComponent},
  {path:'order',component:OrderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
