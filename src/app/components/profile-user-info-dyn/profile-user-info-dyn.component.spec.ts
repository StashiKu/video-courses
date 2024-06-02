import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserInfoDynComponent } from './profile-user-info-dyn.component';

describe('ProfileUserInfoDynComponent', () => {
  let component: ProfileUserInfoDynComponent;
  let fixture: ComponentFixture<ProfileUserInfoDynComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUserInfoDynComponent]
    });
    fixture = TestBed.createComponent(ProfileUserInfoDynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
