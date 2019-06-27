import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListComponent } from './dashboard-list.component';
import { WeatherDataListItemComponent } from '../weather-data-list-item/weather-data-list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListComponent, WeatherDataListItemComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
