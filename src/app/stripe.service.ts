import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable}     from 'rxjs/Observable';

@Injectable()
export class StripeService {
  path = 'http://www.mydatesmith.com/';
  // path= 'http://localhost:4000/';
  // path= 'http://letsgaigai.com/';

  constructor(private http: Http) {
  }

  pay(payment: any): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let url = this.path + 'stripe';

    return this.http.post(url, payment, options)
      .map((res: Response) => res.json());
  }

  readConfig(): Observable<any> {
    let url = this.path + 'stripeConfig';
    return this.http.get(url)
      .map((res: Response) => res.json());
  }

}

