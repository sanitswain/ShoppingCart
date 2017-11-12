import {Component} from '@angular/core';
import {Router} from '@angular/router'

@Component({
    template: 'Sorry, page not available. Looking for <a href="javascript:void(0);" (click)="visitHome()">Home</a> page?'
})
export class Error404Component{

    constructor(private router:Router){

    }

    visitHome(){
        this.router.navigate(['/']);
    }
}