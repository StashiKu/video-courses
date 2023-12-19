import { InjectionToken } from '@angular/core';

export const CategoriesApi = new InjectionToken<string>('CategoriesApi', {
  providedIn: 'any',
  factory: () => 'http://localhost:4201/categories',
});
