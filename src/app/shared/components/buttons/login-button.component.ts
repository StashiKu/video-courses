import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: `
    <button
      class="button__login btn btn-outline-primary"
      type="button"
      tabindex="0"
      (click)="onClick()"
      (keyup)="onKeyUp($event)"
    >
      Log In
    </button>
  `,
})
export class LoginButtonComponent {
  constructor(private auth: AuthService) {}

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/main'
      },
      authorizationParams: {
        prompt: 'login'
      },
    });
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleLogin();
    }
  }
  
  onClick(): void {
    this.handleLogin();
  }
}
