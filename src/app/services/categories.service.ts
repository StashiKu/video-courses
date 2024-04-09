import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, map, retry, share } from 'rxjs';
import { Category } from '../types/category';
import { CategoriesApi } from '../config/app.config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { handleError } from '../shared/error-handler';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private https: HttpClient,
    @Inject(CategoriesApi) private categoriesUrl: string
  ) {}

  public getCategories(): Observable<Category[]> {
    return this.categories$;
  }

  private categories$: Observable<Category[]> = 
    this.https.get<Category[]>(this.categoriesUrl).pipe(
      retry(3),
      share(),
      catchError(handleError)
    );

  categoriesS = toSignal<Category[], Category[]>(this.categories$, {initialValue: []});

  getCategory(keyName: string): Observable<Category | null> {
    const options = { params: new HttpParams().set('key', keyName) };
    return this.https.get<Category[]>(this.categoriesUrl, options)
      .pipe(
        retry(3),
        map<Category[], Category | null>((category) => category[0] || null),
        share(),
        catchError(handleError)
      );
  }
}
