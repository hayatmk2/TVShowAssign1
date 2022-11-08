import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvshowComponent } from './search-tvshow.component';

describe('SearchTvshowComponent', () => {
  let component: SearchTvshowComponent;
  let fixture: ComponentFixture<SearchTvshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTvshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
