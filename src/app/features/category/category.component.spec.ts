import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CategoryComponent } from './category.component';
import { Category } from 'src/app/types/category';
import { categoriesMock } from 'src/app/testing/data/categories.mock';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoPlayerComponent } from '../../components/video-player/video-player.component';
import { VideoSidePanelComponent } from '../../components/video-side-panel/video-side-panel.component';
import { VideosService } from 'src/app/services/videos.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '@auth0/auth0-angular';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let router: Router;
  const mockedCategory: Category = categoriesMock[0];
  const videoServiceSpy = jasmine.createSpyObj('VideosService', ['getVideosByCategory']);
  videoServiceSpy.getVideosByCategory.and.returnValue(of([]));

  beforeEach(() => {
    mockActivatedRoute = {
      data: of({ category: mockedCategory })
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [CategoryComponent, VideoPlayerComponent, VideoSidePanelComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: VideosService, useValue: videoServiceSpy },
        { provide: AuthService, useValue: {} }
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