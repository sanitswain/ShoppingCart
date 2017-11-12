import {Component} from '@angular/core';
import {CartService} from '../service/cart.service';

@Component({
    template: `
        <span style="font-weight: bold; position:fixed; left:50%; transform:translate(-50%, -50%);">
            Thank you for placing order. Invoice soft copy has been sent to your registered email.
        </span>
    `
})
export class InvoiceComponent{
    
    constructor(private cs: CartService){
        this.cs.cartItems = [];
    }

}