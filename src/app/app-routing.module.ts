import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToResolve } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ResolveGuard } from './guards/resolve-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'main',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryKey',
    resolve: {
      category: mapToResolve(ResolveGuard)
    },
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
