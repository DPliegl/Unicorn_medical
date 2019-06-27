import { NgModule } from '@angular/core';
import { SearchService } from '../core/services/search.service';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherDataStoreModule } from './weather-data/weather-data-store.module';
import { SearchDataStoreModule } from './search-data/search-data-store.module';

@NgModule({
    imports: [
        StoreModule.forRoot({
            router: routerReducer,
        }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 50,
            logOnly: environment.production,
        }),
        WeatherDataStoreModule,
        SearchDataStoreModule
    ],
    declarations: [],
    providers: [SearchService]
})
export class RootStoreModule {
}
