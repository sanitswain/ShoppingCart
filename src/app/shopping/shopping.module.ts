import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {ProductService} from '../service/product.service';
import {CartService} from '../service/cart.service'

import {ProductListComponent} from './productlist.component';
import {CartComponent} from './cart.component';
import {ProductDetailsComponent} from './productdetails.component';

@NgModule({
    declarations: [ProductListComponent, CartComponent, ProductDetailsComponent],
    exports: [ProductListComponent, CartComponent],
    providers: [CartService, ProductService],
    imports: [
        CommonModule, FormsModule, HttpModule,
        RouterModule.forChild([
            {path: 'details/:prdId', component: ProductDetailsComponent}
        ])
    ]
})
export class ShoppingModule{

}