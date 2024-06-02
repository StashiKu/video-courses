import { InjectionToken } from '@angular/core';

export const CategoriesApi = new InjectionToken<string>('CategoriesApi', {
    providedIn: 'any',
    factory: () => 'http://localhost:6060/categories'
});

export const VideosApi = new InjectionToken<string>('VideosApi', {
    providedIn: 'any',
    factory: () => 'http://localhost:6060/videos'
});

export const PaymentMethodsApi = new InjectionToken<string>('PaymentMethodsApi', {
    providedIn: 'any',
    factory: () => 'http://localhost:6060/payment-methods'
});

export const UniversitiesApi = new InjectionToken<string>('UniversitiesApi', {
    providedIn: 'any',
    factory: () => 'http://universities.hipolabs.com/search?name'
});
