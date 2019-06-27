import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../interfaces/weather-data';

@Component({
    selector: 'ae-weather-data-item',
    templateUrl: './weather-data-list-item.component.html',
    styleUrls: ['./weather-data-list-item.component.scss']
})
export class WeatherDataListItemComponent implements OnInit {


    @Input() public data: WeatherData;

    constructor() {
    }

    ngOnInit() {
    }

}
