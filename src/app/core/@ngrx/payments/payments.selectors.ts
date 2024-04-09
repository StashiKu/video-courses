import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaymentsState } from './payments.state';
import { paymentsFeatureKey } from './payments.reducer';

export const selectPaymentsState = createFeatureSelector<PaymentsState>(paymentsFeatureKey);
