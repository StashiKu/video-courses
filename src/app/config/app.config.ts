import { InjectionToken } from '@angular/core';

export const CategoriesApi = new InjectionToken<string>('CategoriesApi', {
    providedIn: 'any',
    factory: () => 'http://localhost:4201/categories'
});

export const VideosApi = new InjectionToken<string>('VideosApi', {
    providedIn: 'any',
    factory: () => 'http://localhost:4201/videos'
})