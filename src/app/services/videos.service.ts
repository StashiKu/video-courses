import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, map, retry, share } from 'rxjs';
import { VideoCategory } from '../types/video';
import { handleError } from '../shared/error-handler';
import { VideosApi } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private https: HttpClient,
    @Inject(VideosApi) private videosUrl: string
  ) {}

  public getVideosByCategory(categoryKey: string): Observable<VideoCategory> {
    return this.https
      .get<VideoCategory[]>(this.videosUrl, {
        params: {
          categoryKey
        }
      })
      .pipe(
        retry(3),
        map<VideoCategory[], VideoCategory>(
          (videos) => videos[0]
        ),
        share(),
        catchError(handleError)
      )
  } 
}
