import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render portal name', () => {
    const headerElement = fixture.nativeElement;
    const logoText = headerElement.querySelector('.logo__text');
    expect(logoText.textContent).toEqual('VIDEO COURSES');
  });

  it('should contain html for dark mode icon (Сrescent)', () => {
    const headerElement = fixture.nativeElement;
    const darkModeIconEl = headerElement.querySelector('.modes__icon--dark > .material-icons');
    expect(darkModeIconEl).toBeTruthy();
    expect(darkModeIconEl.textContent).toEqual('dark_mode');
  });

  it('should contain html for light mode icon (sun)', () => {
    const headerElement = fixture.nativeElement;
    const lightModeIconEl = headerElement.querySelector('.modes__icon--light > .material-icons');
    expect(lightModeIconEl).toBeTruthy();
    expect(lightModeIconEl.textContent).toEqual('light_mode');
  });
});
