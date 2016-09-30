import {Routes} from '@angular/router';
import {NoContent} from './no-content';

import {PriceTable} from './price.table';
import {Custom} from './custom';
import {PayComponent} from './pay.component';
import {PriceResolve}   from './price.resolve';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'full', pathMatch: 'full'},
    {
        path: 'full',
        component: PriceTable,
        resolve: {
            stripe: PriceResolve
        }
    },
    {
        path: '10off',
        component: PriceTable,
        resolve: {
            stripe: PriceResolve
        }
    },
    // {
    //     path: 'sdn',
    //     component: PriceTable,
    //     resolve: {
    //         stripe: PriceResolve
    //     }
    // },
    {
        path: 'custom',
        component: Custom,
        resolve: {
            stripe: PriceResolve
        }
    },
    {
        path: 'custom2',
        component: Custom,
        resolve: {
            stripe: PriceResolve
        }
    },
    {
        path: 'custom3',
        component: Custom,
        resolve: {
            stripe: PriceResolve
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
