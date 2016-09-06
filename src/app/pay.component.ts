import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StripeService}     from './stripe.service';
import {Plan} from './plan'

@Component({
    moduleId: module.id,
    templateUrl: 'pay.component.html'
})
export class PayComponent implements OnInit, OnDestroy {
    sub: any;
    plan: any;
    success: boolean;


    constructor(private route: ActivatedRoute, private stripeService: StripeService) {
    }

    pay() {
        var _this = this;
        let key = 'pk_test_FX2nzQcClgXqETUTMZDK2BNu';
        // let key = 'pk_live_Zo2921HDEtTxDEZfXS3ZVR5N';
        StripeCheckout.configure({
            key: key,
            name: 'GaiGai Pte Ltd',
            description: this.plan.itemName,
            image: 'https://www.letsgaigai.com/gokaikai/assets/images/big.logo.png',
            allowRememberMe: false,
            panelLabel: this.plan.count ? 'Subscribe' : 'Pay S$' + this.plan.amount,
            token: function (token: any) {
                _this.plan.tokenId = token.id;
                _this.plan.email = token.email;
                console.log(_this.plan);
                _this.stripeService.pay(_this.plan).subscribe(result => _this.success = result.success);
            }
        }).open();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe((plan: Plan)=> {
            this.plan = plan;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
