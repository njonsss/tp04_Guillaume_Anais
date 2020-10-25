import { Product } from "./product";

export class cartItem {
    $key: string;
    title: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(init?: Partial<cartItem>) {
        Object.assign(this, init);

    }



    get totalPrice() {
        return this.quantity * this.price;
    }
}
