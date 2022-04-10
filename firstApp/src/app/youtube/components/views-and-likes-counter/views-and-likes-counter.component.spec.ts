import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsAndLikesCounterComponent } from './views-and-likes-counter.component';

describe('ViewsAndLikesCounterComponent', () => {
  let component: ViewsAndLikesCounterComponent;
  let fixture: ComponentFixture<ViewsAndLikesCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsAndLikesCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsAndLikesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
