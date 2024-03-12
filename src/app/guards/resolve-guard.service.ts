import { Injectable } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError, of, switchMap, take } from 'rxjs';
import { Category } from '../types/category';
import { AuthGuard } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard {

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Category> {
      if (!route.paramMap.has('categoryKey')) {
        this.router.navigate(['/main']);
  
        return EMPTY
      }

      const categoryKey = route.paramMap.get('categoryKey') as string;

      return this.categoriesService.getCategory(categoryKey)
        .pipe(
          switchMap((category: Category|null) => {
            if (category) {
              return of(category);
            }

            throw new Error('error');
          }),
          take(1),
          catchError(() => {

            this.router.navigate(['/main']);
            return EMPTY;
          })
        )
    }
}


@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 extends AuthGuard {
  resolve() {
    console.log('in auth guard');
    return true
  }
}
