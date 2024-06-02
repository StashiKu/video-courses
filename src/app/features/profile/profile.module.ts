import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/features/profile/profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPaymentModalComponent } from 'src/app/modals/add-payment-modal/add-payment-modal.component';
import { ProfileUserInfoComponent } from 'src/app/components/profile-user-info/profile-user-info.component';
import { ProfileInfoComponent } from 'src/app/components/profile-info/profile-info.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProfileUserInfoDynComponent } from 'src/app/components/profile-user-info-dyn/profile-user-info-dyn.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    AddPaymentModalComponent,
    ProfileUserInfoComponent,
    ProfileUserInfoDynComponent,
    ProfileInfoComponent,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              {
                path: '',
                component: ProfileInfoComponent
              },
              {
                path: 'profile-user-info',
                component: ProfileUserInfoDynComponent
              }
            ]
          },
        ]
      }
    ])
  ]
})
export class ProfileModule { }
