import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Output } from '@angular/core';

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

  constructor(@Inject(DOCUMENT) document: Document) {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 50) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  onToggleMode = () => {
    this.mode = this.mode === 'light' ? this.modes.dark : this.modes.light;
    console.log(this.mode, '<<<<<<<<')
    this.toggle.emit();
  }
}
