import { Category } from '../../../types/category'

export interface CategoriesState {
    data: ReadonlyArray<Category>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string | null;
}

export const initialCategoriesState: CategoriesState = {
    data: [],
    loading: false,
    loaded: false,
    error: null
};
