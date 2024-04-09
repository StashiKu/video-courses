import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PaymentsEffects } from './payments.effects';

describe('PaymentsEffects', () => {
  let actions$: Observable<any>;
  let effects: PaymentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaymentsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PaymentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
