import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaymentsActions } from 'src/app/core/@ngrx/payments/payments.actions';
import { selectPaymentMethodsData } from 'src/app/core/@ngrx/payments/payments.selectors';
import { ProfileService } from 'src/app/services/profile.service';
import { IPaymentMethod } from 'src/app/types/payment-method';
// import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  title = 'Decoded ID Token';
  user!: User|null|undefined;
  paymentMethods!: IPaymentMethod[]|[];
  user$: Observable<User|null|undefined> = this.authService.user$;
  readonly paymentMethodsSignal = this.store.selectSignal(selectPaymentMethodsData);

  constructor(
    private store: Store,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(PaymentsActions.loadPaymentMethods());
    // this.paymentMethods$ = this.store.select(selectCategoriesData);
    // this.profileService.getProfileDetails().
    //   subscribe((paymentMethods: IPaymentMethod[]|[]) => {
    //     this.paymentMethods = paymentMethods;
    //   })
  }
}
