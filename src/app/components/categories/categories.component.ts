import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  // providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {
  public categories!: Category[];

  constructor(public categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
