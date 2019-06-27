import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import WeatherDataJson from './weatherdata.json';
import MockData from './mock.json';
import { ISearchResultItem, SearchResultItem } from '../../interfaces/search-result-item';
import { ISearchResult } from '../../interfaces/search-result';
import { IWeatherData, WeatherData } from '../../interfaces/weather-data';

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

    constructor(private http: HttpClient) {

    }

    searchMockData(keyword: string): Observable<Array<SearchResultItem>> {
        return of(MockData.slice(0, 10).map((item: any) => new SearchResultItem({
            title: item.title,
            creation_date: item.creation_date,
            view_count: item.view_count,
            answer_count: item.answer_count,
            keyword: keyword
        })));
    }

    search(keyword: string): Observable<Array<SearchResultItem>> {
        return this.http.get<ISearchResult>(SearchService.apiUrl + keyword).pipe(
            map((res: ISearchResult) => {
                console.log(`API USAGE: ${res.quota_remaining} of ${res.quota_max} requests available`);
                return res.items
                    .map((item: ISearchResultItem) => new SearchResultItem(
                        {
                            title: item.title,
                            creation_date: item.creation_date,
                            view_count: item.view_count,
                            answer_count: item.answer_count,
                            keyword: keyword
                        }));
            })
        )
    }

    getWeatherData(): Observable<Array<WeatherData>> {
        return of(WeatherDataJson.slice(0, 10).map((item: IWeatherData) => new WeatherData({
                date: item.Datum,
                wind: item.Wind,
                direction: item.Richtung,
                humidity: item['Feuchte A.'],
                brightness: item.Helligkeit,
                air_pressure: item.Luftdruck,
                temperature_a: item['Temp. A.'],
                temperature_3: item['Temp. 3'],
                rain: item.Regen,
                time: item.Zeit
            })
            )
        );
    }


}
