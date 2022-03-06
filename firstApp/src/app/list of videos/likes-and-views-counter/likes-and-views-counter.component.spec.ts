import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesAndViewsCounterComponent } from './likes-and-views-counter.component';

describe('LikesAndViewsCounterComponent', () => {
  let component: LikesAndViewsCounterComponent;
  let fixture: ComponentFixture<LikesAndViewsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesAndViewsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesAndViewsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
