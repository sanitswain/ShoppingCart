import {Component} from '@angular/core';
import {CartService} from '../service/cart.service';
import {CartItem} from '../model/cart.model'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html'
})
export class CartComponent{

    cartItems: CartItem[]

    constructor(private cs:CartService){
        this.cartItems = cs.getCartItems();
    }

    getTotal():number{
        let sum = 0;
        this.cartItems.map(item=>item.product.price * item.qty).forEach(cost=>sum += cost);
        return sum;
    }

    removeItem(idx:number):void{
        this.cs.removeItemFromCart(idx);
    }
}