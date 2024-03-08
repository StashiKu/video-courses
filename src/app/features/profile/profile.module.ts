import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/features/profile/profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPaymentModalComponent } from 'src/app/modals/add-payment-modal/add-payment-modal.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    AddPaymentModalComponent,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
      },
    ]),
  ]
})
export class ProfileModule { }
