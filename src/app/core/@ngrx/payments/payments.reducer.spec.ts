import { reducer } from './payments.reducer';
import { initialPaymentMethodsState } from './payments.state';

describe('Payments Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialPaymentMethodsState, action);

      expect(result).toBe(initialPaymentMethodsState);
    });
  });
});
