import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPayments from './payments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PaymentsEffects } from './payments.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPayments.paymentsFeatureKey, fromPayments.reducer),
    EffectsModule.forFeature([PaymentsEffects])
  ]
})
export class PaymentStoreModuleTsModule { }
