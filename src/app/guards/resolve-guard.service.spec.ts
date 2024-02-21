import { TestBed } from '@angular/core/testing';

import { ResolveGuard } from './resolve-guard.service';
import { CategoriesService } from '../services/categories.service';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, mapToResolve, provideRouter } from '@angular/router';
import { CategoryComponent } from '../features/category/category.component';
import { of } from 'rxjs';
import { categoriesMock } from '../testing/data/categories.mock';
import { Category } from '../types/category';
import { Component } from '@angular/core';

describe('ResolveGuard', () => {
  let resolveGuard: ResolveGuard;
  let harness: RouterTestingHarness;
  
  const stubValue: Category = categoriesMock[0];

  const routeSnapshotMock = {
    paramMap: {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      has: (name: string) => true,
      get: (name: string): Category|null => stubValue
      /* eslint-enable @typescript-eslint/no-unused-vars */
    }
  } as ActivatedRouteSnapshot;

  const getCategorySpy = jasmine.createSpyObj('CategoriesService', ['getCategory']);

  @Component({})
  class mockCategoryComponent {}

  @Component({})
  class mockCategoriesComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({
        imports: [RouterTestingModule],
        declarations: [CategoryComponent],
        providers: [
          provideHttpClient(),
          provideRouter([
            {
              path: 'categories/:categoryKey',
              resolve: {
                card: mapToResolve(ResolveGuard)
              },
              component: mockCategoryComponent
            },
            {
              path: 'main',
              component: mockCategoriesComponent,
            },
          ]),
          { provide: CategoriesService, useValue: getCategorySpy }
        ]
      })
    ).compileComponents();
  });

  beforeEach(() => {
    resolveGuard = TestBed.inject(ResolveGuard);
    getCategorySpy.getCategory.and.returnValue(of(stubValue));
  })

  it('should be created', () => {
    expect(resolveGuard).toBeTruthy();
  });

  it('should call resolve guard when navigating', async () => {
    spyOn(resolveGuard, 'resolve');
    harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(`/categories/front-end`);
    expect(resolveGuard.resolve).toHaveBeenCalled();
  });

  it('should get data for a particular category', (done: DoneFn) => {
    resolveGuard.resolve(routeSnapshotMock)
      .subscribe({
        next: (category: Category | null) => {
          expect(category)
            .withContext('expected category should be resolved')
            .toEqual(stubValue)
          
          done();
        },
        error: done.fail
      })
  });
});
