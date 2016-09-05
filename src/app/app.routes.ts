import {Routes} from '@angular/router';
import {NoContent} from './no-content';

import {FullComponent} from './full.component';
import {Per10Component} from './per10.component';
import {SDNComponent}       from './sdn.component';
import {PayComponent} from './pay.component';
import {StripeConfigResolve}   from './stripe.config.resolve';

export const ROUTES: Routes = [
  {
    path: '',
    component: FullComponent,
    resolve: {
      stripe: StripeConfigResolve
    }
  },
  {
    path: 'full',
    component: FullComponent,
    resolve: {
      stripe: StripeConfigResolve
    }
  },
  {
    path: 'per10',
    component: Per10Component,
    resolve: {
      stripe: StripeConfigResolve
    }
  },
  {
    path: 'sdn',
    component: SDNComponent,
    resolve: {
      stripe: StripeConfigResolve
    }
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: '**',
    component: NoContent
  },
];
