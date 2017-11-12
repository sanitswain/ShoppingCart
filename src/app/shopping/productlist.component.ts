import {Component} from '@angular/core';
import {Product} from '../model/product';
import {CartItem} from '../model/cart.model';
import {ProductService} from '../service/product.service';
import {CartService} from '../service/cart.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{

    products:Product[] = [
        new Product("101", "Watch", "Fasttrack Men's watch", 4500),
        new Product("102", "Mobile", "Moto X Play", 17500)
    ];

    constructor(private ps:ProductService, private cs:CartService){
        ps.getProducts().subscribe(
            (jsonResp) => {
                this.products = jsonResp.json();
                //console.log(this.products);
            },
            (err) => console.error(err)
        );
    }
    
    addToCart(product:Product):void{
        let item = new CartItem(product, 1);
        this.cs.addItemToCart(item);
    }
}