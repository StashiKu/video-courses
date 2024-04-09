import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { PaymentsActions } from './payments.actions';


@Injectable()
export class PaymentsEffects {

  loadPaymentss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PaymentsActions.loadPaymentss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PaymentsActions.loadPaymentssSuccess({ data })),
          catchError(error => of(PaymentsActions.loadPaymentssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
