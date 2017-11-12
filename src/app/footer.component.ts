import {Component} from '@angular/core';

@Component({
    selector: 'footer',
    template: `
        <div style="text-align: center; position: absolute; right: 0; bottom: 0;
            left: 0; padding: 1rem; background-color: #efefef; font-size: medium;">
        Copyright Angular practice &copy; 2017
        </div>
    `
})
export class FooterComponent{

}