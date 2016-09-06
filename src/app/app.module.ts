import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ROUTES } from './app.routes';
// App is our top level component
import {AppComponent}       from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { NoContent } from './no-content';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

import {FullComponent}       from './full.component';
import {Per10Component} from './per10.component';
import {SDNComponent}       from './sdn.component';
import {PayComponent} from './pay.component';
import {StripeService}     from './stripe.service';
import { StripeConfigResolve }  from './stripe.config.resolve';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        FullComponent,Per10Component,SDNComponent,PayComponent,
        NoContent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        // ENV_PROVIDERS,
        APP_PROVIDERS,
        StripeService,
        StripeConfigResolve
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, public appState: AppState) {}
}
