import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { VideoPlayerComponent } from './video-player.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;
  let debugElement: DebugElement;
   /* eslint-disable */
  const getElement = (
    elem: DebugElement | any,
    selector: string,
    isCollection: boolean
  ): DebugElement | any => {
    const queryDic = new Map([
      [true, { debugEl: elem.queryAll.bind(elem), nativeEl: elem.querySelectorAll }],
      [false, { debugEl: elem.query.bind(elem), nativeEl: elem.querySelector }],
    ]);

    const queryMethods = queryDic.get(isCollection);
   
    if (elem instanceof DebugElement) {
      return queryMethods!.debugEl(By.css(selector));
    }

    return queryMethods!.nativeEl(selector);
  };

  const testTemplateElDic = {
    optional: {
      pause: {
        class: '.controls__major-pause',
        additionalSelector: '> .bi.bi-pause-fill',
      },
      unmute: {
        class: '.controls__major-unmute',
        additionalSelector: '> .bi.bi-volume-mute-fill',
      },
    } as { [key: string]: { [key: string]: any } },
    default: {
      play: {
        class: '.controls__major-play',
        additionalSelector: '> .bi.bi-play-fill',
        action: (el: HTMLVideoElement) => el.pause(),
      },
      skip: {
        class: '.controls__major-skip',
        additionalSelector: '> .bi.bi-play-fill',
      },
      mute: {
        class: '.controls__major-mute',
        additionalSelector: '> .bi.bi-volume-up-fill',
      },
      gear: {
        class: '.controls__settings-gear',
        additionalSelector: '> .bi.bi-fullscreen',
      },
      arrows: {
        class: '.controls__settings-arrows',
        additionalSelector: '> .bi.bi-gear-fill',
      },
      range: {
        class: '.controls__major-range',
        additionalSelector: '',
      },
      timer: {
        class: '.controls__major-timer',
        additionalSelector: '',
      },
    } as { [key: string]: { [key: string]: any } },
  };
 
  const getSelector = (data: { [key: string]: string }): string => {
    const { class: cssClass, additionalSelector } = data;

    return `${cssClass}`;
  };
  /* eslint-enable */

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPlayerComponent],
    });
    fixture = TestBed.createComponent(VideoPlayerComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should render default controllers', () => {
    Object.values(testTemplateElDic['default']).forEach((el) => {
      const targetEl = debugElement.query(
        By.css(`${el['class']} ${el['additionalSelector']}`)
      );
      expect(targetEl).toBeTruthy();
    });
  });
});
