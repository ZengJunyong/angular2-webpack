import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {StripeService}     from './stripe.service';
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

    constructor(private route: ActivatedRoute, private router: Router, private stripeService: StripeService) {
        this.stripe = JSON.parse(this.route.snapshot.data['stripe'])[this.route.routeConfig.path];
    }

    choosePayment(plan: Plan) {
        this.router.navigate(['/pay', plan]);
    }
}
