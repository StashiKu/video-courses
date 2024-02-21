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
import { SharedModule } from './shared/shared.module';
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';
import { ProfilePaymentComponent } from './components/profile-payment/profile-payment.component';
import { ProfileSubscriptionsComponent } from './components/profile-subscriptions/profile-subscriptions.component';

@NgModule({
  declarations: [AppComponent, ProfileNavComponent, ProfilePaymentComponent, ProfileSubscriptionsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule.forRoot({
      ...env.auth0,
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
