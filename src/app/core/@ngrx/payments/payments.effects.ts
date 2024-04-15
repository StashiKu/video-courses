import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PaymentsActions } from './payments.actions';
import { ProfileService } from 'src/app/services/profile.service';


@Injectable()
export class PaymentsEffects {
  constructor(private actions$: Actions, private profileService: ProfileService) {}

  loadPaymentss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PaymentsActions.loadPaymentMethods),
      switchMap(() => this.profileService.getProfileDetails()),
      map(paymentMethods => {
        return PaymentsActions.loadPaymentMethodsSuccess({ paymentMethods })
      }),
      catchError(error => of(PaymentsActions.loadPaymentMethodsFailure({ error })))
    );
  });
}
