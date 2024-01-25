import { Component } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  showControls = false;

  private muteUnmute = (videoEl: HTMLVideoElement, range: HTMLInputElement) => {
    if (videoEl.muted) {
      videoEl.muted = false;
      range.value = String(videoEl.volume);
    } else {
      videoEl.muted = true;
      range.value = '0';
    }
  };

  private timeFormatter = (timeInput: number): string => {
    const minuteNum: number = Math.floor(timeInput / 60);
    const secondNum: number = Math.floor(timeInput % 60);
    const minuteStr: string =
      minuteNum < 10 ? '0' + minuteNum : String(minuteNum);
    const secondStr = secondNum < 10 ? '0' + secondNum : String(secondNum);

    return `${minuteStr}:${secondStr}`;
  };

  public onKeyupPlayPause(
    event: KeyboardEvent,
    videoEl: HTMLVideoElement
  ): void {
    if (event.key === 'Enter') {
      if (videoEl.paused) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    }
  }

  public onKeyupMute(
    event: KeyboardEvent,
    videoEl: HTMLVideoElement,
    range: HTMLInputElement
  ): void {
    if (event.key === 'Enter') {
      this.muteUnmute(videoEl, range);
    }
  }

  public onClickMute(videoEl: HTMLVideoElement, range: HTMLInputElement): void {
    this.muteUnmute(videoEl, range);
  }

  public showControllers(flag: boolean) {
    this.showControls = flag;
  }

  public onVideoTimeUpdate(
    videoEl: HTMLVideoElement,
    progressBarEl: HTMLDivElement & { style: CSSStyleDeclaration},
    currentTimeEL: HTMLSpanElement & {innerText: string},
    maxDurationEL: HTMLSpanElement & {innerText: string}
  ): void {
    const currentTime = videoEl.currentTime;
    const duration = videoEl.duration;
    const percentage = (currentTime / duration) * 100;
    progressBarEl.style['width'] = percentage + '%';

    currentTimeEL.innerText = this.timeFormatter(videoEl.currentTime);
    maxDurationEL.innerText = this.timeFormatter(videoEl.duration);
  }

  // eslint-disable-next-line
  public onRange(event: any, rangeEl: HTMLInputElement, videoEl: HTMLVideoElement): void {
    videoEl.volume = event.target?.['value']
    rangeEl.value = String(videoEl.volume);
  }
}
