import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {StripeTableComponent} from './stripe.table.component'
import {StripeService}     from './stripe.service';

@Component({
  moduleId: module.id,
  templateUrl: 'price.table.html',
  providers: [StripeService]
})
export class SDNComponent extends StripeTableComponent implements OnInit {
  constructor(private route: ActivatedRoute, router: Router, stripeService: StripeService) {
    super(router, stripeService);
  }

  ngOnInit() {
    this.stripe = (JSON.parse(this.route.snapshot.data['stripe']))['sdn'];
  }
}
