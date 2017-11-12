import {Component} from '@angular/core';

@Component({
    template: `
    <div class="col-sm-6">
        <product-list></product-list>
    </div>

    <div class="col-sm-6 well">
        <app-cart></app-cart>
    </div>
    `
})
export class ShoppingComponent{

}