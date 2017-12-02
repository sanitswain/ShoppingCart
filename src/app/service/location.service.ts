import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
/**
 * The agenda here is to populate state dropdown on change of country dropdown. 
 * Both state and country dropdowns are sibling components.
 * Here I am trying to show how a sibling component can be affected when another component chaanges its value.
 * 
 * LocationService is having stateSource and stateObserver.
 * stateSource will be refenced by CountryComponent to push the country value whenever it changes.
 * stateObserver will be used by StatesComponent who is observing got the states value.
 * When CountryComponent will notify the country using "stateSource.next(country)" then 
 * the stateObserver will detect this change and populate states value.
 */
@Injectable()
export class LocationService{

    public stateSource = new Subject<string>();
    public stateObserver = this.stateSource.asObservable();

    mappings = {
        "India": ["Orissa", "Karnataka", "Andra Pradesh", "Maharastra"],
        "USA": ["New Jersey", "New York"],
        "UK": ["London", "UB City"],
        "Canada": ["Ottawa", "Blue Born"]
    }

    getCountries():string[]{
        return Object.keys(this.mappings);
    }

    getStates(country:string):string[]{
        return this.mappings[country];
    }
    
}