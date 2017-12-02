import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoginService} from '../service/login.service';

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent{
    username:string = null;
    password:string = null;

    constructor(private ls:LoginService, private router:Router, private location:Location){

    }

    /*@Output()
    loginEvent = new EventEmitter();

    login():void{
        this.loginEvent.emit(this.loginName);
    }*/

    onLogin(){
        this.ls.emitLogin(this.username);
        //this.router.navigate(['/']);
        this.location.back();
    }

    gotoRegisterScreen(){
        this.router.navigate(["/user-registration"]);
    }
}