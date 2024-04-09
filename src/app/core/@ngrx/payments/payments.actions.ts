import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IPaymentMethod } from 'src/app/types/payment-method';

export const PaymentsActions = createActionGroup({
  source: 'Payments',
  events: {
    'Load Payments': emptyProps(),
    'Load Payments Success': props<{ paymentsMethods: ReadonlyArray<IPaymentMethod> }>(),
    'Load Payments Failure': props<{ error: unknown }>(),
  }
});
