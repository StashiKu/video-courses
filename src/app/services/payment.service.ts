import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PaymentMethodsApi } from '../config/app.config';
import { IPaymentMethod } from '../types/payment-method';
import { Observable, catchError, share } from 'rxjs';
import { handleError } from '../shared/error-handler';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(
    private https: HttpClient,
    @Inject(PaymentMethodsApi) private paymentMethodsUrl: string
  ) {}

  public addPaymentMethod(payment: IPaymentMethod): Observable<IPaymentMethod> {
    return this.https.post<IPaymentMethod>(this.paymentMethodsUrl, payment)
      .pipe(
        share(),
        catchError(handleError)
      );
  }

  public getPaymentMethods(userEmail: string): Observable<IPaymentMethod[]> {
    const options = { params: new HttpParams().set('email', userEmail) };

    return this.https.get<IPaymentMethod[]>(this.paymentMethodsUrl, options)
      .pipe(
        share(),
        catchError(handleError)
      );
  }
}
