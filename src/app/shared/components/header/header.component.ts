import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarfixed = false;
  modes = {
    light: 'light',
    dark: 'dark'
  };
  mode = 'light';
  isAuthenticated$ = this.authService.isAuthenticated$;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private authService: AuthService
  ) {}

  switchTheme = () => {
    this.mode = this.mode === 'light' ? this.modes.dark : this.modes.light;
    const hostClass = this.mode === 'light' ? 'light-theme' : 'dark-theme';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }

  onToggleModeClick = () => {
    this.switchTheme();
  }

  onToggleModeKeyup = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.switchTheme();
    }
  }
}
