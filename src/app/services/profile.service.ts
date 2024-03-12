import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { PaymentService } from './payment.service';
import { EMPTY, catchError, switchMap } from 'rxjs';
import { handleError } from '../shared/error-handler';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private authService: AuthService,
    private paymentService: PaymentService  
  ) {}

  public getProfileDetails() {
    return this.authService.user$.
      pipe(
        switchMap((user: User|null|undefined) => {
          if (user && user.email) {
            return this.paymentService.getPaymentMethods(user.email)
          }
          return EMPTY;
        }),
        catchError(handleError)
      )
  }
}
