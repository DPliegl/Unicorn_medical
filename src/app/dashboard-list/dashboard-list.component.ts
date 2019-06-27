import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItem } from '../interfaces/search-result-item';
import { WeatherData } from '../interfaces/weather-data';

@Component({
    selector: 'ae-dashboard-list',
    templateUrl: './dashboard-list.component.html',
    styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

    @Input() public title: string;
    @Input() public listItems: Array<SearchResultItem | WeatherData> = [];


    constructor() {
    }

    ngOnInit() {

    }

    isWeatherData(listItem: any) {
        return listItem instanceof WeatherData;
    }

    isSearchResultItem(listItem: any) {
        return listItem instanceof SearchResultItem;
    }

}
