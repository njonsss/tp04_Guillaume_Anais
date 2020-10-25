import{Product} from "./product";
import {cartItem} from "./cartItem";

export class Cart {
    items: cartItem[] = [];
    constructor(private itemsMap: { [productId: string]: cartItem}) {
        this.itemsMap = itemsMap || {};
        for (const productId in itemsMap) {
            const item = itemsMap[productId];
            this.items.push(new cartItem({...item, $key: productId}));
        }
    }

    get totalPrice() {
        let sum = 0;

        for (const productId in this.items) {
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (const productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }
}
