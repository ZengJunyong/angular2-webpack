import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import {ROUTES} from './app.routes';
// App is our top level component
import {AppComponent}       from './app.component';
import {NoContent} from './no-content';


import {PriceTable}       from './price.table';
import {Custom} from './custom';
import {PayComponent} from './pay.component';
import {StripeService}     from './stripe.service';
import {PriceResolve}  from './price.resolve';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        PriceTable,Custom,
        PayComponent,
        NoContent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        StripeService,
        PriceResolve
    ]
})
export class AppModule {
}
