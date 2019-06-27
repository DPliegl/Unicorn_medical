import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/services/search.service';
import { forkJoin } from 'rxjs';
import { SearchResultItem } from '../interfaces/search-result-item';
import { WeatherData } from '../interfaces/weather-data';

@Component({
    selector: 'ae-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    public weatherData: Array< SearchResultItem | WeatherData> = [];
    public typescriptData = [];
    public angularData: Array< SearchResultItem | WeatherData> = [];

    constructor(private service: SearchService) {
    }

    ngOnInit() {

        this.service.searchMockData('TypeScript').subscribe((resultItems: Array<SearchResultItem>) => {
            resultItems.forEach((resultItem: SearchResultItem) => this.typescriptData.push(resultItem))
        });

        this.service.searchMockData('Angular').subscribe((resultItems: Array<SearchResultItem>) => {
            resultItems.forEach((resultItem: SearchResultItem) => this.angularData.push(resultItem))
        });

        forkJoin( this.service.searchMockData('TypeScript'), this.service.getWeatherData())
            .pipe( res => res).subscribe((res: [Array<SearchResultItem>, Array<WeatherData>]) => {
            for (let i = 5; i < res[0].length; i++) {
                this.weatherData.push(res[0][i]);
                this.weatherData.push(res[1][i]);
            }
        });

    }

}
