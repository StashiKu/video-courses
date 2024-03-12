import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { IPaymentMethod } from 'src/app/types/payment-method';

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

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfileDetails().
      subscribe((paymentMethods: IPaymentMethod[]|[]) => {
        this.paymentMethods = paymentMethods;
      })
  }
}
