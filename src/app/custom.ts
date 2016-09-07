import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {StripeService}     from './stripe.service';
import {Plan} from './plan'

@Component({
    moduleId: module.id,
    templateUrl: 'custom.html'
})
export class Custom {
    plan: Plan;

    constructor(private route: ActivatedRoute, private router: Router, private stripeService: StripeService) {
        this.plan = JSON.parse(this.route.snapshot.data['stripe'])[this.route.routeConfig.path];
    }

    choosePayment() {
        this.router.navigate(['/pay', this.plan]);
    }
}
