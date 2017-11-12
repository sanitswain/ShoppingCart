import {Component} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product';

@Component({
    template: `
        <h3>Product Information</h3><hr/>
        <table class="table table-bordered well" style="width: 50%;">
            <tr> <th>Id</th>            <td>{{product.id}}</td>          </tr>
            <tr> <th>Name</th>          <td>{{product.pname}}</td>       </tr>
            <tr> <th>Description</th>   <td>{{product.description}}</td> </tr>
            <tr> <th>Price</th>         <td>{{product.price}}</td>       </tr>
        </table>
        <button class="btn btn-sm btn-primary" (click)="goBack()">Go back to Shopping</button>
    `
})
export class ProductDetailsComponent{
    product: Product = new Product(null, null, null, 0);

    constructor(private ps:ProductService, private actr:ActivatedRoute, private router:Router){
        let prdId = this.actr.snapshot.params["prdId"];

        this.ps.getProductDetails(prdId).subscribe(
            (jsonResp) => this.product = jsonResp.json(),
            (err) => console.error(err)
        );
    }

    goBack(){
        this.router.navigate(['/shopping']);
    }


}