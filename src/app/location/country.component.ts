import {Component} from '@angular/core';
import {LocationService} from '../service/location.service';

@Component({
    selector: 'countries',
    template: `
        <select [(ngModel)]="country" (ngModelChange)="onCountrySelect($event)">
            <option>--select country--</option>
            <option *ngFor="let country of getCountries()">{{country}}</option>
        </select>
    `
})
export class CountryComponent{

    private country:string;

    constructor(private ls:LocationService){}

    getCountries(){
        return this.ls.getCountries();
    }

    onCountrySelect() {
        console.log(this.country);
        this.ls.stateSource.next(this.country);
    }
}