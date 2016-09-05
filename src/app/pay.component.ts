import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'pay.component.html'
})
export class PayComponent implements OnInit, OnDestroy {
  sub: any;
  result: any;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(result => {
      this.result = result;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
