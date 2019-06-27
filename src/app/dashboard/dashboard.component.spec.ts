import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { combineReducers, StoreModule } from '@ngrx/store';

import * as fromWeatherData from '../root-store/weather-data';
import * as fromSearchData from '../root-store/search-data';

const reducersMap = {
    'weather-data': fromWeatherData.Reducers.featureReducer,
    'search-data': fromSearchData.Reducers.featureReducer
};
const rootReducer = combineReducers(reducersMap, {});
const initialState = rootReducer(undefined, {type: ''});

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [StoreModule.forRoot(reducersMap, {initialState: initialState})],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
