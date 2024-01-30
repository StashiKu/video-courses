import { ComponentFixture, TestBed} from '@angular/core/testing';

import { VideoSidePanelComponent } from './video-side-panel.component';
import { getVideoTitles, getVideosByCategoryTest } from 'src/app/testing/data/videos.mock';
import { VideosService } from 'src/app/services/videos.service';
import { of } from 'rxjs';
import { VideoCategory } from 'src/app/types/video';

describe('VideoSidePanelComponent', () => {
  let component: VideoSidePanelComponent;
  let fixture: ComponentFixture<VideoSidePanelComponent>;
  const categoryKey = 'front-end';

  const videoServiceSpy = jasmine.createSpyObj('VideosService', ['getVideosByCategory']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSidePanelComponent],
      providers: [
        { provide: VideosService, useValue: videoServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(VideoSidePanelComponent);
    component = fixture.componentInstance;
    videoServiceSpy.getVideosByCategory.and.returnValue(of(getVideosByCategoryTest(categoryKey)));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render video previews',() => {
    const expectedResponse: VideoCategory = getVideosByCategoryTest(categoryKey);

    const elements: NodeList = fixture.nativeElement.querySelectorAll('.video-side-panel__item');
    const titlesEl: NodeList = fixture.nativeElement.querySelectorAll('.video-side-panel__item-title');

    expect(elements.length).toBe(expectedResponse.videos.length);
  
    titlesEl.forEach((el: Node) => {
      expect(getVideoTitles(categoryKey)).toContain(el.textContent as string);
    })
  });
});