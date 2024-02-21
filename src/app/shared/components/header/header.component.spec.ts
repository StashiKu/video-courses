import { ComponentFixture, TestBed} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../buttons/login-button.component';
import { LogoutButtonComponent } from '../buttons/logout-button.component';
import { SignupButtonComponent } from '../buttons/signup-button.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let headerElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LoginButtonComponent,
        LogoutButtonComponent,
        SignupButtonComponent
      ],
      providers: [
        { provide: AuthService, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render portal name', () => {
    const logoText = headerElement.querySelector('.logo__text');
    expect(logoText.textContent).toEqual('VIDEO COURSES');
  });

  it('should contain html for dark mode icon (Сrescent)', () => {
    const darkModeIconEl = headerElement.querySelector('.modes__icon--dark > .material-icons');
    expect(darkModeIconEl).toBeTruthy();
    expect(darkModeIconEl.textContent).toEqual('dark_mode');
  });

  it('should contain html for light mode icon (sun)', () => {
    const lightModeIconEl = headerElement.querySelector('.modes__icon--light > .material-icons');
    expect(lightModeIconEl).toBeTruthy();
    expect(lightModeIconEl.textContent).toEqual('light_mode');
  });

  it('should change class for body tag when switching the theme', () => {
    const iconDe = fixture.debugElement.query(By.css('.switch-mode'));
    const document = fixture.nativeElement.ownerDocument;
    const bodyWithLightThemeClass = document.querySelector('body');
    expect(bodyWithLightThemeClass.classList.contains('dark-theme')).toBeFalse();
  
    iconDe.triggerEventHandler('click');

    const bodyWithDarkThemeClass = document.querySelector('body');
    expect(bodyWithDarkThemeClass.classList.contains('dark-theme')).toBeTrue();
    expect(bodyWithDarkThemeClass.classList.contains('light-theme')).toBeFalse();
  });
});
