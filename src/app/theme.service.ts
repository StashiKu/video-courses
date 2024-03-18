import { Injectable, Renderer2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkS = signal(false);

  toggleDarkTheme(renderer: Renderer2, document: Document): void {
    this.isDarkS.set(!this.isDarkS());
    renderer.setAttribute(document.body, 'class', this.isDarkS() ? 'dark-theme':  'light-theme');
  }
}
