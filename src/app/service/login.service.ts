import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService{
    private loginSource = new Subject<string>();

    loginObserver = this.loginSource.asObservable();

    emitLogin(username:string){
        this.loginSource.next(username);
    }
}