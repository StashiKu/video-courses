/* eslint-disable */
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable()
export class TsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloneRequest;

    // const contextValue = req.context.get(interceptorTOKEN)

    if (req.method === 'POST' || req.method === 'PUT') {
      console.log('req.method:', req.method);
      cloneRequest = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/jaon',
          Authorization: 'user-token',
        }),
      });

      console.log(cloneRequest);
    } else {
      cloneRequest = req;
    }

    return next.handle(cloneRequest).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      map((event: HttpEvent<any>) => {
        if ((event as HttpResponse<any>).url!.includes('users')) {
          console.log('Response Interceptor:');
          console.log(event);
          console.log((event as HttpResponse<any>).body);
        }
        return event;
      })
    );
  }
}
