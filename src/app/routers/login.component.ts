import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoginService} from '../service/login.service';

@Component({
    template: `
        <div class="well" style="width: 30%; position:fixed; top:30%; left:50%; transform:translate(-50%, -50%);">
            Username: <input type="text" [(ngModel)]="loginName" /> <br/><br/> 
            <button class="btn btn-sm btn-primary" (click)="onLogin()">Submit</button>
        </div>
    `
})
export class LoginComponent{
    loginName:string = null;

    constructor(private ls:LoginService, private router:Router, private location:Location){

    }

    /*@Output()
    loginEvent = new EventEmitter();

    login():void{
        this.loginEvent.emit(this.loginName);
    }*/

    onLogin(){
        this.ls.emitLogin(this.loginName);
        //this.router.navigate(['/']);
        this.location.back();
    }
}