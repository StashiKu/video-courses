import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToResolve } from '@angular/router';
import { ResolveGuard } from './guards/resolve-guard.service';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'categories/:categoryKey',
    resolve: {
      category: mapToResolve(ResolveGuard)
    },
    loadChildren: () =>
      import('./features/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard]
  }
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
