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
    success: number;

    // user: {firstName: string,lastName: string} = {};
    user: any = {}; // I think any is better at here

    constructor(private route: ActivatedRoute, private stripeService: StripeService) {
    }

    onSubmit() {
        var _this = this;
        // let key = 'pk_test_FX2nzQcClgXqETUTMZDK2BNu';
        let key = 'pk_live_Zo2921HDEtTxDEZfXS3ZVR5N';
        let {id, itemName, amount, count} = this.plan;
        let {firstName, lastName} = this.user;
        StripeCheckout.configure({
            key: key,
            name: 'GaiGai Pte Ltd',
            description: itemName,
            image: 'https://www.letsgaigai.com/gokaikai/assets/images/big.logo.png',
            allowRememberMe: false,
            panelLabel: count ? 'Subscribe' : 'Pay S$' + amount,
            token: function (token: any) {
                // TODO why can't use _this.plan here?
                _this.stripeService.pay({
                    id,
                    tokenId: token.id,
                    email: token.email,
                    amount, itemName, count, firstName, lastName
                }).subscribe((result) => {
                    let {success} = result;
                    if (success) {
                        _this.user = {};
                    }
                    _this.success = success;
                });
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
