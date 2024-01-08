import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories!: Category[];

  constructor(
    public categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  public onClick(categoryKey: string): void {
    this.router.navigate([`/categories/${categoryKey}`]);
  }
}
