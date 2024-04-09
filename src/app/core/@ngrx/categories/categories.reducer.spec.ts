import { reducer,  } from './categories.reducer';
import { initialCategoriesState } from './categories.state';

describe('Categories Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialCategoriesState, action);

      expect(result).toBe(initialCategoriesState);
    });
  });
});
