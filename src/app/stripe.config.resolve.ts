import {Injectable}             from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable}             from 'rxjs/Observable';

import {StripeService}     from './stripe.service';

@Injectable()
export class StripeConfigResolve implements Resolve<any> {
  constructor(private cs: StripeService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.cs.readConfig();
  }
}


