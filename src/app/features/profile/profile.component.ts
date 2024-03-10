import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  title = 'Decoded ID Token';

  user$: Observable<User|null|undefined> = this.authService.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));

  constructor(private authService: AuthService) {}
}
