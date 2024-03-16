import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-button',
  styleUrls: ['./profile-button.component.scss'],
  template: `
    <a class="login"
      tabindex="0"
      (click)="onClick()"
      (keyup)="onKeyUp($event)"  
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
        aria-hidden="true"
        focusable="false"
        role="img"
      >
        <path
          d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
        />
      </svg>
      <span class="sr-only">Click to go to profile page</span>
    </a>
  `
})
export class ProfileButtonComponent {
  constructor(private auth: AuthService, private router: Router) {}

  navigateTo(): void {
    this.router.navigate([`/profile`]);
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.navigateTo();
    }
  }
  
  onClick(): void {
    this.navigateTo();
  }
}
