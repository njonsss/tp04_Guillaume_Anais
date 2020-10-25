import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-kart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart$;

  constructor(private CartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.CartService.getCart();
  }

  clearCart() {
    this.CartService.clearCart();
  }

}
