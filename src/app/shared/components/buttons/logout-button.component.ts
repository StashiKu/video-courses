import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  styleUrls: ['./logout-button.component.scss'],
  template: `
    <a
      class="logout"
      tabindex="0"
      (click)="onClick()"
      (keyup)="onKeyUp($event)"
    >
      <svg
        role="img"
        aria-hidden="true"
        facusable="false"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 -960 960 960"
        width="30"
      >
        <path
          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
        />
      </svg>
      <span class="sr-only">Log Out</span>
    </a>
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
