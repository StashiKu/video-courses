import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '@auth0/auth0-angular';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { CategoriesService } from 'src/app/services/categories.service';
import { of } from 'rxjs';
import { categoriesMock } from 'src/app/testing/data/categories.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const categoriesServiceSpy = jasmine.createSpyObj('CategoriesService', ['getCategories']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CategoriesComponent
      ],
      imports: [
        SharedModule
      ],
      providers: [
        { provide: AuthService, useValue: {} },
        { provide: CategoriesService, useValue: categoriesServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    categoriesServiceSpy.getCategories.and.returnValue(of(categoriesMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
