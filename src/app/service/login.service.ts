import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoginService{
    private loginSource = new Subject<string>();

    /**
     * loginObserver is referenced in AppComponent which is pushing username on after observable is available.
     * Login component is pushing username to this observable so that same username can be passed to 
     * HeaderComponent from AppComponent
     */
    loginObserver = this.loginSource.asObservable();

    emitLogin(username:string){
        this.loginSource.next(username);
    }
}