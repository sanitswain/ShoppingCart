import {Component} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service'

@Component({
    templateUrl: "./productmanage.component.html"
})
export class ProductManageComponent{
    products: Product[];
    formProduct: Product;

    constructor(private ps:ProductService){
        this.products = [];
        this.formProduct = new Product(null, null, null, 0);

        this.ps.getProducts().subscribe(
            (jsonResp) => this.products = jsonResp.json(),
            (err) => console.error(err)
        );
    }

    invokeEdit(selectedProduct: Product):void{
        Object.assign(this.formProduct, selectedProduct);
    }

    saveProduct():void{
        /*console.log(this.formProduct);
        if(this.formProduct.isEmptyyy()){
            return;
        }*/

        this.ps.saveProduct(this.formProduct).subscribe(
            (jsonResp) => {
                let updatedProduct = jsonResp.json();

                if(this.formProduct.id){ // Update request
                    let idx = this.products.findIndex(prd => prd.id==this.formProduct.id);
                    this.products[idx] = updatedProduct;
                }else{ // Add request
                    this.products.push(updatedProduct);
                }

                this.formProduct = new Product(null, null, null, 0);
            },
            (err) => console.log(err)
        );
    }

    removeProduct(pid:string, idx:number){
        this.ps.deleteProduct(pid).subscribe(
            (jsonResp) => this.products.splice(idx, 1),
            (err) => console.log(err)
        );
    }
}