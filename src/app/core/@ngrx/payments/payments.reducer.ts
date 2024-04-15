import { createFeature, createReducer, on } from '@ngrx/store';
import { PaymentsActions } from './payments.actions';
import { initialPaymentMethodsState } from './payments.state';

export const paymentMethodsFeatureKey = 'payments';

export const reducer = createReducer(
  initialPaymentMethodsState,
  on(PaymentsActions.loadPaymentMethodsSuccess, (state, { paymentMethods }) => {
    const data = [...paymentMethods];

    return {
      ...state,
      data,
      loaded: true,
      loading: false,
      error: null
    };
  }),
  on(PaymentsActions.loadPaymentMethodsFailure, (state, action) => state),
);
