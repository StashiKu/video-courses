import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CategoriesActions } from './categories.actions';
import { CategoriesService } from 'src/app/services/categories.service';

@Injectable()
export class CategoriesEffects {
  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}

  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActions.loadCategories),
      switchMap(() => this.categoriesService.getCategories()),
      map(categories => {
        console.log(categories, 'categories in effect')
        return CategoriesActions.loadCategoriesSuccess({ categories })
      }),
      catchError(error => of(CategoriesActions.loadCategoriesFailure({ error })))
    );
  });
}
