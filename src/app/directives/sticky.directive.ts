import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DestroyService } from '../services/destroy.service';
import { distinctUntilChanged, fromEvent, map, pairwise, startWith, takeUntil } from 'rxjs';
import { WINDOW } from '@ng-web-apis/common';

const THRESHOLD = 200;

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {

  constructor(
    private destroy$: DestroyService,
    @Inject(WINDOW) windowRef: Window,
    renderer: Renderer2,
    { nativeElement }: ElementRef<HTMLElement>
  ) {
    fromEvent(windowRef,'scroll')
      .pipe(
        map(() => windowRef.scrollY),
        pairwise(),
        map(([prev, curr]) => {
          console.log(prev, curr);
          return curr < THRESHOLD || prev > curr}),
        distinctUntilChanged(),
        startWith(true),
        takeUntil(destroy$)
      )
      .subscribe((stuck) => {
        renderer.setAttribute(nativeElement, 'data-stuck', String(stuck));
      })
  }
}
