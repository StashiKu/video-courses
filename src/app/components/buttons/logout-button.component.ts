import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  template: `
    <button
      type="button"
      class="button__logout btn-outline-primary"
      tabindex="0"
      (click)="onClick()"
      (keyup)="onKeyUp($event)"
    >Log Out</button>
    <!-- <div class="logoff" tabindex="0"
      (click)="onClick()"
      (keyup)="onKeyUp($event)"
    >
      <span class="material-icons">logout</span>
    </div> -->
  `,
})
export class LogoutButtonComponent {
  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  handleLogout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleLogout();
    }
  }
  
  onClick(): void {
    this.handleLogout();
  }
}
