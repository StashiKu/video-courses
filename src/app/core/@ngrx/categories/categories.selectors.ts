import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState } from './categories.state';
import { categoriesFeatureKey } from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const selectCategoriesData = createSelector(selectCategoriesState, (state: CategoriesState) => state.data);
export const selectCategoriesError = createSelector(selectCategoriesState, (state: CategoriesState) => state.error);
export const selectCategoriesLoaded = createSelector(selectCategoriesState, (state: CategoriesState) => state.loaded);

// export const selectSelectedTaskByUrl = createSelector(
//     selectCategoriesData,
//     selectRouterState,
//     (categories, router): Category|null => {
//         const taskID = router.state.params['taskID'];
//         if (taskID && Array.isArray(categories)) {
//             return categories.find(category => category.id === +taskID);
//         } else {
//             return null;
//         }
// });