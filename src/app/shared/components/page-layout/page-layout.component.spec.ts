import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutComponent } from './page-layout.component';
import { SharedModule } from '../../shared.module';
import { AuthService } from '@auth0/auth0-angular';

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutComponent],
      imports: [SharedModule],
      providers: [
        { provide: AuthService, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
