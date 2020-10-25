import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HearderComponent } from './hearder/header.component';
import { KartComponent } from './cart/cart.component';
import { ProdutComponent } from './product/produt.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HearderComponent, KartComponent, ProdutComponent, ProductComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
