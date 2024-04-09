import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './categories.effects';
import { categoriesFeatureKey, reducer } from './categories.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(categoriesFeatureKey, reducer),
    EffectsModule.forFeature([CategoriesEffects])
  ]
})
export class CategoriesStoreModule { }
