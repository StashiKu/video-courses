import * as fromPayments from './payments.reducer';
import { selectPaymentsState } from './payments.selectors';

describe('Payments Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPaymentsState({
      [fromPayments.paymentsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
