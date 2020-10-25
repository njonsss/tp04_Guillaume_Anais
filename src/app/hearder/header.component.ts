import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Cart } from "../interface/cart";
import { CartService } from "../services/cart.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  cart$: Observable<Cart>;

  constructor(private CartService: CartService) {}

  ngOnInit() {
    this.cart$ = this.CartService.getCart();
  }
}
