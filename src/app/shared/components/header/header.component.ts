import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, Signal } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarfixed = false;
  isDarkS: Signal<boolean> = this.themeService.isDarkS
  isAuthenticated$ = this.authService.isAuthenticated$;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private authService: AuthService,
    private themeService: ThemeService,
  ) {}

  switchTheme = () => {
    this.themeService.toggleDarkTheme(this.renderer, this.document);
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
