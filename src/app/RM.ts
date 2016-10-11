// http://stackoverflow.com/questions/31879497/angular2-radio-button-binding

import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'RM.html'
})
export class RM {

    options: any;

    origin = document.location.origin;

    constructor() {
        this.options = {
            custom: 'no',
            months: 'full',
            discount: 'n'
        };
    }

}
