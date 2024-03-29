import { SubscriptionsComponent } from './admin/subscriptions/subscriptions.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ShowproductComponent } from './components/showproduct/showproduct.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductsComponent } from './admin/products/products.component';
import { LoginComponent } from './admin/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"admin/login", component:LoginComponent},
  {path:"admin/products", component:ProductsComponent},
  {path:"admin/products/:id", component:ProductsComponent},
  {path:"admin/product", component:ProductComponent},
  {path:"admin/product/:id", component:ProductComponent},
  {path:"products", component:ShowproductsComponent},
  {path:"product/:id", component:ShowproductComponent},
  {path:"admin/orders", component:OrdersComponent},
  {path:"admin/subscriptions", component:SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
