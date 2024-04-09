import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './core/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';
import { RootStoreModule } from './core/@ngrx/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth0,
    }),
    RootStoreModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
