import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from '../core/services/search.service';
import { of } from 'rxjs';


class StubSearchService {
    searchMockData = jasmine.createSpy('searchMockData').and.returnValue(of([]));
    search = jasmine.createSpy('search').and.returnValue(of([]));
    getWeatherData = jasmine.createSpy('getWeatherData').and.returnValue(of([]));
}

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            providers: [{provide: SearchService, useClass: StubSearchService}],
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
