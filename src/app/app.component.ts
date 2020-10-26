import { Component, VERSION } from '@angular/core';
import { ProductService } from './services/product.service';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CartService } from './services/cart.service';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    ProductFormComponent,
    ProductCartComponent,
    ProductQuantityComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
       {
        path: '',
        component: ProductsComponent
      }, {
        path: 'products',
        component: ProductsComponent
      }, {
        path: 'cart',
        component: ShoppingCartComponent
      }, {
        path: 'login',
        component: LoginComponent
      },
    ])
  ]
  providers: [
  
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
export class AppModule  {
 
}
