import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CategoryComponent } from './category.component';
import { Category } from 'src/app/types/category';
import { categoriesMock } from 'src/app/testing/data/categories.mock';
import { By } from '@angular/platform-browser';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  const mockedCategory: Category = categoriesMock[0];

  beforeEach(() => {
    mockActivatedRoute = {
      data: of({ category: mockedCategory })
    };

    TestBed.configureTestingModule({
      declarations: [CategoryComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the category', () => {
    expect(component.category).toEqual(mockedCategory);
  });

  it('should render correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('.category__title');
    
    expect(titleElement.textContent).toEqual(mockedCategory.title);
  });

  xit('should navigate to main page when `go back` btn is clicked', () => {
    const goBackBtn = fixture.debugElement.query(By.css('.btn--go-back'));
    
    goBackBtn.triggerEventHandler('click');

    expect(TestBed.inject(Router).url).toEqual('/main');
  });
});