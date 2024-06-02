import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PaymentsActions } from 'src/app/core/@ngrx/payments/payments.actions';
import { selectPaymentMethodsData } from 'src/app/core/@ngrx/payments/payments.selectors';
import { AddPaymentModalComponent } from 'src/app/modals/add-payment-modal/add-payment-modal.component';

@Component({
  standalone: true,
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
  imports: [AddPaymentModalComponent, NgIf, NgForOf]
})
export class ProfileInfoComponent implements OnInit {
  readonly paymentMethodsSignal = this.store.selectSignal(selectPaymentMethodsData);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PaymentsActions.loadPaymentMethods());
  }
}
