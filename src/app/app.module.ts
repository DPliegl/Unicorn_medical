import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchService } from './core/services/search.service';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './core/layout/layout.module';
import { SearchComponent } from './search/search.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { WeatherDataListItemComponent } from './weather-data-list-item/weather-data-list-item.component';
import { SearchResultListItemComponent } from './search-result-list-item/search-result-list-item.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SearchComponent,
        DashboardListComponent,
        WeatherDataListItemComponent,
        SearchResultListItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LayoutModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    entryComponents: [WeatherDataListItemComponent, SearchResultListItemComponent],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

library.add(fas, far);
