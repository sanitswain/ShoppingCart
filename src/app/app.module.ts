import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ShoppingModule} from './shopping/shopping.module';
import {LocationModule} from './location/location.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {LoginComponent} from './routers/login.component';
import {UserRegistrationComponent} from './routers/user-registration.component';
import {ShoppingComponent} from './routers/shopping.component';
import {HomeComponent} from './routers/home.component';
import {ProductManageComponent} from './routers/productmanage.component';
import {Error404Component} from './routers/404.component';

import {LoginService} from './service/login.service';

@NgModule({
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, LoginComponent, UserRegistrationComponent,
        HomeComponent, ProductManageComponent, ShoppingComponent, Error404Component
    ],
    imports: [
        BrowserModule, FormsModule, ShoppingModule, LocationModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'shopping', component: ShoppingComponent},
            {path: 'manage', component: ProductManageComponent},
            {path: 'login', component: LoginComponent},
            {path: 'user-registration', component: UserRegistrationComponent},
            {path: '**', component: Error404Component}
        ])
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule{

}