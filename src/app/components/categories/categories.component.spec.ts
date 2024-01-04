import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { CategoriesComponent } from './categories.component';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/types/category';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { categoriesMock } from 'src/app/testing/data/categories.mock';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let harness: RouterTestingHarness;

  const getCategoriesResponseMock: Category[] = categoriesMock;

  function onCategoryClick(target: DebugElement) {
    fixture.ngZone?.run(() => {
      target.triggerEventHandler('click');
    });
  }

  function findCategory(title: string): Category {
    return (getCategoriesResponseMock
      .find((item: Category) => item.title === title)) as Category
  }

  const categoriesTitleArray: string[] = getCategoriesResponseMock
    .reduce((acc: string[], curr: Category) => {
      return [...acc, curr.title]
    }, []);
  
  const categoriesServiceSpy = jasmine.createSpyObj('CategoriesService', ['getCategories']);

  @Component({})
  class mockCategoryComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({
        imports: [RouterTestingModule],
        declarations: [CategoriesComponent],
        providers: [
          provideHttpClient(),
          provideRouter(
            [
              { path: 'main', component: CategoriesComponent },
              { path: 'categories/:categoryKey', component: mockCategoryComponent }
            ]
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

  beforeEach(fakeAsync(() => {
    const categoryDe = fixture.debugElement.query(By.css('.categories__item'));
    onCategoryClick(categoryDe)
  }));

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
    expect(categoryElements.length).toBe(categoriesTitleArray.length);

    categoryElements.forEach((element: Node) => {
      expect(categoriesTitleArray).toContain(element.textContent as string);
    });
  }));

  it('should navigate to a correct page after single category is clicked', fakeAsync(() => {
    const onClickSpy = spyOn(component, 'onClick');
    const categoryDe = fixture.debugElement.query(By.css('.categories__item'));
    const expectedCategory: Category|undefined = findCategory(categoryDe.nativeElement.textContent);
    const expectedCategoryKey = expectedCategory?.key;
    
    onCategoryClick(categoryDe);

    expect(onClickSpy.calls.count()).toBe(1, '`onClick` called once');
    expect(expectedCategoryKey).not.toBeUndefined();
    expect(onClickSpy).toHaveBeenCalledWith(expectedCategoryKey);
    expect(TestBed.inject(Router).url).toEqual(`/categories/${expectedCategoryKey}`);
  }));
});
