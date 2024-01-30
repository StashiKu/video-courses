import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, map, retry, share } from 'rxjs';
import { Category } from '../types/category';
import { CategoriesApi } from '../config/app.config';
import { HttpClient } from '@angular/common/http';
import { handleError } from '../shared/error-handler';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private https: HttpClient,
    @Inject(CategoriesApi) private categoriesUrl: string
  ) {}

  public getCategories(): Observable<Category[]> {
    return this.https
      .get<Category[]>(this.categoriesUrl)
      .pipe(
        retry(3),
        share(),
        catchError(handleError)
      );
  }

  public getCategory(keyName: string): Observable<Category | null> {
    return this.https
      .get<Category[]>(this.categoriesUrl)
      .pipe(
        retry(3),
        map<Category[], Category | null>(
          (categories) => {
            const res: Category|undefined = categories.find(
              (item: Category) => item.key == keyName
            );

            if (res) return res;

            return null;
          }
        ),
        share(),
        catchError(handleError)
      );
  }
}
