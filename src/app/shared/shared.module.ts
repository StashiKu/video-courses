import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { ProfileButtonComponent } from './components/buttons/profile-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';
import { SignupButtonComponent } from './components/buttons/signup-button.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
// import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    ProfileButtonComponent,
    PageLayoutComponent,
    // PageLoaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageLayoutComponent,
    // PageLoaderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
