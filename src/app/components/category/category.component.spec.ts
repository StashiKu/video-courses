import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CategoryComponent } from './category.component';
import { Category } from 'src/app/types/category';
import { categoriesMock } from 'src/app/testing/data/categories.mock';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoPlayerComponent } from '../video-player/video-player.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let router: Router;
  const mockedCategory: Category = categoriesMock[0];

  beforeEach(() => {
    mockActivatedRoute = {
      data: of({ category: mockedCategory })
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CategoryComponent, VideoPlayerComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
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

  it('should navigate to main page when `go back` btn is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const goBackBtn = fixture.debugElement.query(By.css('.btn--go-back'));
    
    goBackBtn.triggerEventHandler('click');

    expect(navigateSpy).toHaveBeenCalledWith(['/main']);
  });

  it('should be `Go Back` text for btn', () => {
    const goBackBtn = fixture.nativeElement.querySelector('.btn--go-back');
    expect(goBackBtn.textContent).toEqual('Go Back');
  });
});