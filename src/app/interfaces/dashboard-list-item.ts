import { ISearchResultItem } from './search-result-item';
import { IWeatherData } from './weather-data';

export interface IDashboardListItem {
    data: ISearchResultItem | IWeatherData;
    component: any;
}

export interface DashboardListItemComponent {
    data: any;
}
