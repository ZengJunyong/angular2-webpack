import {Plan} from './model/plan'
import {Router} from '@angular/router';
import {StripeService}     from './stripe.service';

export class StripeTableComponent {
  stripe: any;

  constructor(private router: Router, private stripeService: StripeService) {
  }

  choosePayment(plan: Plan) {
    var _this = this;
    // let key = 'pk_test_FX2nzQcClgXqETUTMZDK2BNu';
    let key = 'pk_live_Zo2921HDEtTxDEZfXS3ZVR5N';
    StripeCheckout.configure({
      key: key,
      name: 'GaiGai Pte Ltd',
      description: plan.itemName,
      image: 'https://www.letsgaigai.com/gokaikai/assets/images/big.logo.png',
      allowRememberMe: false,
      panelLabel: plan.count ? 'Subscribe' : 'Pay S$' + plan.amount,
      token: function (token: any) {
        plan.tokenId = token.id;
        plan.email = token.email;
        console.log(plan);
        _this.stripeService.pay(plan).subscribe(result => _this.router.navigate(['/pay', result]));
      }
    }).open();
  }
}
