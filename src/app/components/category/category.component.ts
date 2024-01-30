import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public category!: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ category }) => {
      this.category = category;
    });
  }

  goBack(): void {
    this.router.navigate(['/main']);
  }  
}
