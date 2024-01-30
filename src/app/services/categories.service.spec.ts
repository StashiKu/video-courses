import { CategoriesService } from './categories.service';
import { HttpClient } from '@angular/common/http';
import { asyncData, asyncError } from '../testing/helpers/async-observable-helpers';
import { categoriesMock } from '../testing/data/categories.mock';
import { Category } from '../types/category';
import { errorResponse404 } from '../testing/helpers/http-test-responses';

describe('CategoriesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let categoriesService: CategoriesService;
  let categoriesUrlStub: string;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    categoriesUrlStub = 'test/url';
    categoriesService = new CategoriesService(httpClientSpy, categoriesUrlStub);
  });

  it('should be created', () => {
    expect(categoriesService).toBeTruthy();
  });

  it('should return correct category [getCategory]', (done: DoneFn) => {
    const expectedCategoryKey = categoriesMock[0].key;
    httpClientSpy.get.and.returnValue(asyncData(categoriesMock));

    categoriesService.getCategory(expectedCategoryKey)
      .subscribe({
        next: (category: Category | null) => {
          expect(category?.key)
            .withContext('expected category')
            .toEqual(expectedCategoryKey);
          done();
        },
        error: done.fail
      })
  });

  it('should return an error when the server returns a 404 [getCategory]', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncError(errorResponse404));

    categoriesService.getCategory('')
      .subscribe({
        next: () => done.fail(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: (error: any) => {
          expect(error.error)
          .withContext('expected error (getCategory)')
          .toContain('test 404 error');
          done();
        }
      })
  });

  it('should return list of categories [getCategories]', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData(categoriesMock));

    categoriesService.getCategories()
    .subscribe({
      next: (categories: Category[]) => {
        expect(categories)
          .withContext('expected list of categories')
          .toEqual(categoriesMock);
        done();
      },
      error: done.fail
    });
  });

  it('should return an error when the server returns a 404 [getCategories]', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncError(errorResponse404));

    categoriesService.getCategories()
      .subscribe({
        next: () => done.fail(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: (error: any) => {
          expect(error.error)
          .withContext('expected error (getCategories)')
          .toContain('test 404 error');
          done();
        }
      });
  });
});
