import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="page-layout">
      <app-header></app-header>
      <main class="page-layout__content">
        <ng-content></ng-content>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {}
