import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultListItemComponent } from './search-result-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchResultListItemComponent', () => {
  let component: SearchResultListItemComponent;
  let fixture: ComponentFixture<SearchResultListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ SearchResultListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
