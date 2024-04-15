import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IPaymentMethod } from 'src/app/types/payment-method';

export const PaymentsActions = createActionGroup({
  source: 'Payments',
  events: {
    'Load Payment Methods': emptyProps(),
    'Load Payment Methods Success': props<{ paymentMethods: ReadonlyArray<IPaymentMethod> }>(),
    'Load Payment Methods Failure': props<{ error: unknown }>(),
  }
});
