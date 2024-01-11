import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Output, Renderer2 } from '@angular/core';

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

  @Output() readonly toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2  
  ) {}

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 50) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

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
