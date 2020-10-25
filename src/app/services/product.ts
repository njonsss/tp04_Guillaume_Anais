import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// @ts-ignore
import {environment} from '../../environments/environment';


@Injectable()
export class Product {
    private db = environment.file;
    constructor() {
    }

    getAll() {
        return this.db.list('/products');
    }

    getProduct(productId) {
        return this.db.object('/products/' + productId);
    }

    updateProduct(productId, product) {
        return this.db.object('/products/' + productId).update(product);
    }

    deleteProduct(productId) {
        return this.db.object('/products/' + productId).remove();
    }

}
