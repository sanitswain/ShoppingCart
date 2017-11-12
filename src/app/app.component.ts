import {Component} from '@angular/core';
import {LoginService} from './service/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent{
    username:string = null;

    constructor(private ls:LoginService){
        this.ls.loginObserver.subscribe(logedInUserName => this.username = logedInUserName);
    }

    receiveLogin(user:string){
        console.log(user)
        this.username = user;
    }
}