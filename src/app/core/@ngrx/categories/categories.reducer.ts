import { createReducer, on } from '@ngrx/store';
import { CategoriesActions } from './categories.actions';
import { initialCategoriesState } from './categories.state';

export const categoriesFeatureKey = 'categories';

export const reducer = createReducer(
  initialCategoriesState,
  // on(CategoriesActions.addCategories,
  //   (state, action) => adapter.addOne(action.categories, state)
  // ),
  // on(CategoriesActions.upsertCategories,
  //   (state, action) => adapter.upsertOne(action.categories, state)
  // ),
  // on(CategoriesActions.addCategoriess,
  //   (state, action) => adapter.addMany(action.categoriess, state)
  // ),
  // on(CategoriesActions.upsertCategoriess,
  //   (state, action) => adapter.upsertMany(action.categoriess, state)
  // ),
  // on(CategoriesActions.updateCategories,
  //   (state, action) => adapter.updateOne(action.categories, state)
  // ),
  // on(CategoriesActions.updateCategoriess,
  //   (state, action) => adapter.updateMany(action.categoriess, state)
  // ),
  // on(CategoriesActions.deleteCategories,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(CategoriesActions.deleteCategoriess,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(CategoriesActions.loadCategories, state => {
  //   console.log('[Load Categories Started] action being handled!');
  //   return {
  //     ...state,
  //     loading: true,
  //     loaded: false,
  //     error: null
  //   }
  // }),
  on(CategoriesActions.loadCategoriesSuccess, (state, { categories }) => {
    const data = [...categories]
    return {
      ...state,
      data,
      loading: false,
      loaded: true,
      error: null
    }
  }),
  on(CategoriesActions.loadCategoriesFailure, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false,
      loaded: false,
    }
  })
);
