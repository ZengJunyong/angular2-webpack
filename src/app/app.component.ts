import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription}          from 'rxjs/Subscription';
import {DataService} from './data.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    stripe: any;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,private data: DataService) {
    }

    ngOnInit() {
        console.log('set params');
        this.sub = this.route.queryParams.subscribe(params => this.data.params = params);
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
