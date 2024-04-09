import { createFeature, createReducer, on } from '@ngrx/store';
import { PaymentsActions } from './payments.actions';
import { initialPaymentsState } from './payments.state';

export const paymentsFeatureKey = 'payments';

export const reducer = createReducer(
  initialPaymentsState,
  on(PaymentsActions.loadPayments, state => ({
    ...state,
    loading: true,
  })),
  on(PaymentsActions.loadPaymentsSuccess, (state, { paymentsMethods }) => {
    const data = [...paymentsMethods];
    return {
      ...state,
      data,
      loaded: true,
      loading: false,
      error: null
    };
  }),
  on(PaymentsActions.loadPaymentsFailure, (state, action) => state),
);

export const paymentsFeature = createFeature({
  name: paymentsFeatureKey,
  reducer,
});
