import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDataListItemComponent } from './weather-data-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('WeatherDataItemComponent', () => {
    let component: WeatherDataListItemComponent;
    let fixture: ComponentFixture<WeatherDataListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule],
            declarations: [WeatherDataListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WeatherDataListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
