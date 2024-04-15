import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from './meta-reducers';
import { CustomSerializer, routerReducers } from './router';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CategoriesStoreModule } from './categories/categories-store.module';
import { PaymentMethodsStoreModule } from './payments/payment-store.module.ts.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot([]),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    }),

    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true
    }) : [],

    CategoriesStoreModule,
    PaymentMethodsStoreModule
  ]
})
export class RootStoreModule { }
