import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Category } from 'src/app/types/category';

export const CategoriesActions = createActionGroup({
  source: 'Categories/API',
  events: {
    'Load Categories': emptyProps(),
    'Load Categories Success': props<{ categories: ReadonlyArray<Category> }>(),
    'Load Categories Failure': props<{ error: Error | string | null }>(),

    // 'Add Category': props<{ category: Categories }>(),
    // 'Upsert Category': props<{ category: Categories }>(),
    // 'Add Categoriess': props<{ categoriess: Categories[] }>(),
    // 'Upsert Categories': props<{ categoriess: Categories[] }>(),
    // 'Update Categories': props<{ categories: Update<Categories> }>(),
    // 'Update Categoriess': props<{ categoriess: Update<Categories>[] }>(),
    // 'Delete Category': props<{ id: string }>(),
    // 'Delete Categories': props<{ ids: string[] }>(),
    // 'Clear Categories': emptyProps(),
  }
});
