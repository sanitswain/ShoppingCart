import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../service/cart.service';

@Component({
    templateUrl: "./confirmcheckout.component.html"
})
export class CheckoutConfirmation{

    constructor(private cs:CartService, private router:Router){}

    getTotal():number{
        return this.cs.getTotal();
    }

    continueShopping(){
        this.router.navigate(["/shopping"]);
    }

    confirmCheckout(){
        this.router.navigate(["/confirm"]);
    }

}

