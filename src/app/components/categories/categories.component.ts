import { Component, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ThemeService } from 'src/app/theme.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  public categories: Signal<Category[]> = this.categoriesService.categoriesS;
  public isDarkTheme: Signal<boolean> = this.themeService.isDarkS;

  constructor(
    public categoriesService: CategoriesService,
    private themeService: ThemeService,
    private router: Router
  ) {}

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
