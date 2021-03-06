import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchService } from './core/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                LayoutModule,
                AppRoutingModule,
                HttpClientModule
            ],
            declarations: [
                AppComponent,
                DashboardComponent,
                SearchComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: APP_BASE_HREF, useValue: '/'},
                SearchService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
