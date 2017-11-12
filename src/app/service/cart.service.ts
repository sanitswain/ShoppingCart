import {Injectable} from '@angular/core'
import {CartItem} from '../model/cart.model'

@Injectable()
export class CartService {
    cartItems:CartItem[]

    constructor(){
        this.cartItems = [];
    }

    getCartItems():CartItem[]{
        return this.cartItems;
    }

    addItemToCart(item:CartItem){
        let addedItem = this.cartItems.find(itm => itm.product.id == item.product.id);
        if(addedItem){
            addedItem.qty += item.qty;
        }else{
            this.cartItems.push(item);
        }
    }

    removeItemFromCart(position:number){
        this.cartItems.splice(position, 1);
    }

    getTotal():number{
        let sum = 0;
        this.cartItems.map(item=>item.product.price * item.qty).forEach(cost=>sum += cost);
        return sum;
    }

}