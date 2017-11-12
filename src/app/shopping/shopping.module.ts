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
import {CheckoutConfirmation} from './confirmcheckut.component';
import {InvoiceComponent} from './invoice.component';

@NgModule({
    declarations: [
        ProductListComponent, CartComponent, ProductDetailsComponent, 
        CheckoutConfirmation, InvoiceComponent
    ],
    exports: [ProductListComponent, CartComponent],
    providers: [CartService, ProductService],
    imports: [
        CommonModule, FormsModule, HttpModule,
        RouterModule.forChild([
            {path: 'details/:prdId', component: ProductDetailsComponent},
            {path: 'confirmcheckout', component: CheckoutConfirmation},
            {path: 'confirm', component: InvoiceComponent}
        ])
    ]
})
export class ShoppingModule{

}