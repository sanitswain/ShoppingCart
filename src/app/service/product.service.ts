import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import {Product} from '../model/product';

@Injectable()
export class ProductService{

    URL:string = "http://localhost:2403/products";

    private products: Product[]

    constructor(private _http:Http){
        this.products = [];
    }

    getProducts():Observable<Response>{
        let obs:Observable<Response> = this._http.get(this.URL);
        return obs;
    }

    saveProduct(newProduct: Product):Observable<Response>{
        return this._http.post(this.URL, newProduct);
    }

    deleteProduct(pid:string):Observable<Response>{
        return this._http.delete(this.URL + "/" + pid);
    }

    getProductDetails(pid:string):Observable<Response>{
        return this._http.get(this.URL + "/" + pid)
    }
}