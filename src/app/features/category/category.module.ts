import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category.component';
import { VideoPlayerComponent } from 'src/app/components/video-player/video-player.component';
import { VideoSidePanelComponent } from 'src/app/components/video-side-panel/video-side-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoryComponent,
    VideoPlayerComponent,
    VideoSidePanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryComponent,
      },
    ]),
  ]
})
export class CategoryModule { }
