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
        // let key = 'pk_test_eiiwIKCYkfioOq4JkZqmvBa7';
        let key = 'pk_live_FOCwVXu69gKwdVQD2h5h8Fuy';
        let {id, itemName, amount, count} = this.plan;
        let {firstName, lastName} = this.user;
        StripeCheckout.configure({
            key: key,
            name: 'PaktorMY Sdn Bhd',
            description: itemName,
            image: 'https://www.mydatesmith.com/gokaikai/assets/images/stripe.logo.jpg',
            allowRememberMe: false,
            panelLabel: count ? 'Subscribe' : 'Pay MYR' + amount,
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
