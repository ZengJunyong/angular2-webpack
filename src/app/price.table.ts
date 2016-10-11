import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription}          from 'rxjs/Subscription';
import {StripeService}     from './stripe.service';
import {Plan} from './plan'

@Component({
    moduleId: module.id,
    styleUrls: [
        'price.table.css'
    ],
    templateUrl: 'price.table.html'
})
export class PriceTable implements OnInit, OnDestroy {
    params: any;
    stripe: any;
    private sub: Subscription;

    constructor(private route: ActivatedRoute, private router: Router, private stripeService: StripeService) {
        this.stripe = JSON.parse(this.route.snapshot.data['stripe'])[this.route.routeConfig.path];
    }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => this.params = params);
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    choosePayment(plan: Plan) {
        this.router.navigate(['/pay', plan]);
    }
}
