import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentMethodsState } from './payments.state';
import { paymentMethodsFeatureKey } from './payments.reducer';

export const selectPaymentMethodsState = createFeatureSelector<PaymentMethodsState>(paymentMethodsFeatureKey);

export const selectPaymentMethodsData = createSelector(selectPaymentMethodsState, (state: PaymentMethodsState) => state.data);
export const selectPaymentMethodsError = createSelector(selectPaymentMethodsState, (state: PaymentMethodsState) => state.error);
export const selectPaymentMethodsLoaded = createSelector(selectPaymentMethodsState, (state: PaymentMethodsState) => state.loaded);
