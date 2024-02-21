import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="page-layout">
      <app-header></app-header>
      <div class="page-layout__content">
        <ng-content></ng-content>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {}
