import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { httpInterceptorProviders } from './core/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoSidePanelComponent } from './components/video-side-panel/video-side-panel.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CategoriesComponent, CategoryComponent, VideoPlayerComponent, FooterComponent, VideoSidePanelComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
