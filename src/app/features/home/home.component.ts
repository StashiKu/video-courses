import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-page-layout>
      <app-categories></app-categories>
    </app-page-layout>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
