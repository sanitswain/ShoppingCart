import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LocationComponent} from './location.component';
import {CountryComponent} from './country.component';
import {StatesComponent} from './states.component';

import {LocationService} from '../service/location.service';

@NgModule({
    declarations: [LocationComponent, CountryComponent, StatesComponent],
    imports: [BrowserModule, CommonModule, FormsModule],
    exports: [LocationComponent, CountryComponent, StatesComponent],
    providers: [LocationService]
})
export class LocationModule{

}
