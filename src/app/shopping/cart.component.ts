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
        return this.cs.getTotal();
    }

    removeItem(idx:number):void{
        this.cs.removeItemFromCart(idx);
    }
}