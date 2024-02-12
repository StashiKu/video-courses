import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from '@auth0/auth0-angular';
import { SignupButtonComponent } from './components/buttons/signup-button.component';
import { LoginButtonComponent } from './components/buttons/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button.component';
import { TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      HeaderComponent,
      SignupButtonComponent,
      LoginButtonComponent,
      LogoutButtonComponent,
      FooterComponent
    ],
    providers: [
      { provide: AuthService, useValue: {}}
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    
    expect(app).toBeTruthy();
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('video-courses app is running!');
  });
});
