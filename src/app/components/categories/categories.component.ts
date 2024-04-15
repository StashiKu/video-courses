import { Component, OnInit, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesActions } from 'src/app/core/@ngrx/categories/categories.actions';
import { selectCategoriesData } from 'src/app/core/@ngrx/categories/categories.selectors';
import { CategoriesService } from 'src/app/services/categories.service';
import { ThemeService } from 'src/app/theme.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoriesState$!: Observable<ReadonlyArray<Category>>;
  categoriesData$!: Observable<ReadonlyArray<Category>>;
  readonly categoriesSignal = this.store.selectSignal(selectCategoriesData);
  public isDarkTheme: Signal<boolean> = this.themeService.isDarkS;

  constructor(
    public categoriesService: CategoriesService,
    private themeService: ThemeService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CategoriesActions.loadCategories());
    this.categoriesData$ = this.store.select(selectCategoriesData);
  }

  public navigateToCategory(categoryKey: string): void {
    this.router.navigate([`/categories/${categoryKey}`]);
  }

  public onClick(categoryKey: string): void {
    this.navigateToCategory(categoryKey);
  }
  
  public onKeyup(event: KeyboardEvent, categoryKey: string): void {
    if (event.key === 'Enter') {
      this.navigateToCategory(categoryKey);
    }
  }
}
