import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { VideoCategory, VideoType } from 'src/app/types/video';

@Component({
  selector: 'app-video-side-panel',
  templateUrl: './video-side-panel.component.html',
  styleUrls: ['./video-side-panel.component.scss']
})
export class VideoSidePanelComponent implements OnInit {
  public videosData!: VideoType[];
  @Input() categoryKey!: string;
  
  constructor(
    public videoService: VideosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.videoService.getVideosByCategory(this.categoryKey)
      .subscribe((videosData: VideoCategory) => {
        this.videosData = videosData.videos;
      })
  }
}
