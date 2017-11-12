import {Component, Input} from '@angular/core';
import {LoginService} from './service/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    cmpHeading:string = 'My Shopping Cart';

    @Input("uname")
    uname:string;

    constructor(private ls:LoginService){}

    onLogout(){
        this.ls.emitLogin(null);
    }

}