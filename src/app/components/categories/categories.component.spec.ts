import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { CategoriesComponent } from './categories.component';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/types/category';
import { of } from 'rxjs';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let harness: RouterTestingHarness;

  const getCategoriesResponseMock: Category[] = [
    {
      title: 'FrontEnd'
    },
    {
      title: 'BackEnd'
    },
    {
      title: 'Computer Science'
    },
    {
      title: 'Data Bases'
    },
    {
      title: 'Algorythms'
    }
  ];

  const categoriesArray: string[] = getCategoriesResponseMock
    .reduce((acc: string[], curr: Category) => {
      return [...acc, curr.title]
    }, []);
  
  const categoriesServiceSpy = jasmine.createSpyObj('CategoriesService', ['getCategories']);

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, {
        declarations: [CategoriesComponent],
        providers: [
          provideHttpClient(),
          provideRouter(
            [{ path: 'main', component: CategoriesComponent }]
          ),
          { provide: CategoriesService, useValue: categoriesServiceSpy }
        ]
      }),
    )
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    categoriesServiceSpy.getCategories.and.returnValue(of(getCategoriesResponseMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component for correct url', async () => {
    harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('main', CategoriesComponent);
    harness.detectChanges();
    expect(TestBed.inject(Router).url).toEqual('/main');
  });


  it('should render categories', fakeAsync (() => {
    tick();

    const categoryElements: NodeList = fixture.nativeElement.querySelectorAll('.categories__item-name');
    expect(categoryElements.length).toBe(categoriesArray.length);

    categoryElements.forEach((element: Node) => {
      expect(categoriesArray).toContain(element.textContent as string);
    });
  }));

  xit('', () => {
    // should check if user is navigated with a correct url after clicking on a single category
  });
});