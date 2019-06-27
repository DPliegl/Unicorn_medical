import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { SearchResultItem } from '../interfaces/search-result-item';
import { WeatherData } from '../interfaces/weather-data';

import { select, Store } from '@ngrx/store';
import { State } from '../root-store/root-state';
import * as fromWeatherData from '../root-store/weather-data';
import * as fromSearchData from '../root-store/search-data';
import { map } from 'rxjs/operators';


@Component({
    selector: 'ae-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    public weatherData$: Observable<Array<WeatherData | SearchResultItem>>;
    public typescriptData$: Observable<Array<SearchResultItem>>;
    public angularData$: Observable<Array<SearchResultItem>>;
    public isLoading$: Observable<boolean>;

    constructor(private readonly store: Store<State>) {
    }

    ngOnInit() {

        // Dispatch loading actions
        this.store.dispatch(new fromSearchData.Actions.LoadRequestAction('Weather'));

        this.store.dispatch(new fromSearchData.Actions.LoadRequestAction('Typescript'));

        this.store.dispatch(new fromSearchData.Actions.LoadRequestAction('Angular'));

        this.store.dispatch(new fromWeatherData.Actions.LoadRequestAction());

        // Bind Data via selector
        this.typescriptData$ = this.store
            .pipe(select(fromSearchData.Selectors.selectAllMyFeatureItemsWithQuery('Typescript')),
                map(result => result.slice(0, 10)));

        this.angularData$ = this.store
            .pipe(select(fromSearchData.Selectors.selectAllMyFeatureItemsWithQuery('Angular')),
                map(result => result.slice(0, 10)));

        this.weatherData$ = combineLatest(
            this.store.pipe(select(fromWeatherData.Selectors.selectAllMyFeatureItems)),
            this.store.pipe(select(fromSearchData.Selectors.selectAllMyFeatureItemsWithQuery('Weather')))
        ).pipe(map(([res1, res2]: [Array<WeatherData>, Array<SearchResultItem>]) => {
            const weatherData: Array<WeatherData | SearchResultItem> = [];
            for (let i = 0; i < 5; i++) {
                if (i < res1.length) {
                    weatherData.push(res1[i]);
                }
                if (i < res2.length) {
                    weatherData.push(res2[i]);
                }
            }
            return weatherData;
        }));

        // Bind to the loading state of the search data
        this.isLoading$ = this.store.select(fromSearchData.Selectors.IsLoading);
    }

}
