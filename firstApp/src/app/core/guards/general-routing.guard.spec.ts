import { TestBed } from '@angular/core/testing';

import { GeneralRoutingGuard } from './general-routing.guard';

describe('GeneralRoutingGuard', () => {
  let guard: GeneralRoutingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GeneralRoutingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
