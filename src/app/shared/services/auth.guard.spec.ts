import { TestBed } from '@angular/core/testing';

import { AuthGaurd } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGaurd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGaurd);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
