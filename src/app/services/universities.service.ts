import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, retry, share } from 'rxjs';
import { UniversitiesApi } from '../config/app.config';
import { handleError } from '../shared/error-handler';
import { IUniversity } from '../types/university';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {
  constructor(
    private https: HttpClient,
    @Inject(UniversitiesApi) private universitiesApi: string
  ) {}

  public getUniversities(term: string): Observable<IUniversity[]> {
    return this.https.get<any>(`${this.universitiesApi}=${term}`).pipe(
      retry(3),
      share(),
      catchError(handleError)
    );
  }
}
