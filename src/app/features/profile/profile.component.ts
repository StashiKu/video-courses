import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  title = 'Decoded ID Token';
  user!: User|null|undefined;
  user$: Observable<User|null|undefined> = this.authService.user$;
  
  constructor(private authService: AuthService) {}
}
