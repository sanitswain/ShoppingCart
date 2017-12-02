import {Component} from '@angular/core';
import {LocationService} from '../service/location.service';

@Component({
    selector: 'states',
    template: `
        <select>
            <option>--select state--</option>
            <option *ngFor="let state of states">{{state}}</option>
        </select>
    `
})
export class StatesComponent{

    states:string[];

    constructor(private ls:LocationService){
        this.ls.stateObserver.subscribe(country => this.states=this.ls.getStates(country));
    }
}