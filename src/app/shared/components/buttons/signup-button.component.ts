import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: `
    <button
      class="button__sign-up btn btn-outline-primary me-2"
      type="button"
      tabindex="0"
      (click)="onClick()"
      (keyup)="onKeyUp($event)"
    >
      Sign Up
    </button>
  `,
})
export class SignupButtonComponent {
  constructor(private auth: AuthService) {}

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleSignUp();
    }
  }
  
  onClick(): void {
    this.handleSignUp();
  }
}
