import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, retry, share } from 'rxjs';
import { Category } from '../types/category';
import { CategoriesApi } from '../config/categories.config';
import { HttpClient } from '@angular/common/http';
import { handleError } from '../shared/error-handler';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    @Inject(CategoriesApi) private categoriesUrl: string,
    private https: HttpClient
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
}
