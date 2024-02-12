import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToResolve } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ResolveGuard } from './guards/resolve-guard.service';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoriesComponent,
  },
  {
    path: 'main',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryKey',
    canActivate: [AuthGuard],
    resolve: {
      category: mapToResolve(ResolveGuard)
    },
    component: CategoryComponent
  },
  // {
  //   path: 'profile',
  //   // canActivate: [AuthGuard]
  //   // TODO: add profile component
  // }
  // TODO: add NotFound page
  // {
  //   path: '**',
  //   component: 'NotFound'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
