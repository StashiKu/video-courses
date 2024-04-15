import * as fromPayments from './payments.reducer';
import { selectPaymentMethodsState } from './payments.selectors';

describe('Payments Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPaymentMethodsState({
      [fromPayments.paymentMethodsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
