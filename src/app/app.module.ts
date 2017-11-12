import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ShoppingModule} from './shopping/shopping.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {LoginComponent} from './routers/login.component';
import {ShoppingComponent} from './routers/shopping.component';
import {HomeComponent} from './routers/home.component';
import {ProductManageComponent} from './routers/productmanage.component';
import {Error404Component} from './routers/404.component';

import {LoginService} from './service/login.service';

@NgModule({
    declarations: [
        AppComponent, HeaderComponent, FooterComponent, LoginComponent, 
        HomeComponent, ProductManageComponent, ShoppingComponent, Error404Component
    ],
    imports: [
        BrowserModule, ShoppingModule,FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'shopping', component: ShoppingComponent},
            {path: 'manage', component: ProductManageComponent},
            {path: 'login', component: LoginComponent},
            {path: '**', component: Error404Component}
        ])
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule{

}