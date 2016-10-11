import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from './data.service';
import {Plan} from './plan'

@Component({
    moduleId: module.id,
    styleUrls: [
        'price.table.css'
    ],
    templateUrl: 'price.table.html'
})
export class PriceTable {
    stripe: any;
    months: number;

    constructor(private route: ActivatedRoute, private router: Router, private data: DataService) {
        this.stripe = JSON.parse(this.route.snapshot.data['stripe'])[this.route.routeConfig.path];
        this.months = this.data.params.months * 1;
        console.log(this.months);
    }

    choosePayment(plan: Plan) {
        this.router.navigate(['/pay', plan]);
    }
}
