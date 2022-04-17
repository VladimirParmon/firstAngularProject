import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoCardComponent } from './custom-video-card.component';

describe('CustomVideoCardComponent', () => {
  let component: CustomVideoCardComponent;
  let fixture: ComponentFixture<CustomVideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomVideoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
