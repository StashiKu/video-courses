import { createFeatureSelector } from '@ngrx/store';
import { getRouterSelectors, type RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

const routerFeatureKey = 'router';
export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);

export const {
    selectQueryParams,
    selectRouteParams,
    selectRouteData,
    selectUrl
} = getRouterSelectors(selectRouterState);
