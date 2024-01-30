import { VideosService } from './videos.service';
import { HttpClient } from '@angular/common/http';
import { categoriesMock } from '../testing/data/categories.mock';
import { asyncData } from '../testing/helpers/async-observable-helpers';
import { getVideosByCategoryTest } from '../testing/data/videos.mock';
import { VideoCategory } from '../types/video';

describe('VideosService', () => {
  let videoService: VideosService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let videosUrlStub: string;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    videosUrlStub = 'test/url';
    videoService = new VideosService(httpClientSpy, videosUrlStub);
  });

  it('should be created', () => {
    expect(videoService).toBeTruthy();
  });

  it('should return videos of correct category [getVideosByCategory', (done: DoneFn) => {
    const expectedCategoryKey: string = categoriesMock[0].key;
    const expectedResponse: VideoCategory = getVideosByCategoryTest(expectedCategoryKey);
    httpClientSpy.get.and.returnValue(asyncData([expectedResponse]));

    videoService.getVideosByCategory(expectedCategoryKey)
      .subscribe({
        next: (videos: VideoCategory) => {
          expect(videos)
            .withContext('expected category')
            .toEqual(expectedResponse);
          done();
        },
        error: done.fail
      })
  });
});
