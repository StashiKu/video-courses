import { IPaymentMethod } from 'src/app/types/payment-method';

export interface PaymentMethodsState {
    data: ReadonlyArray<IPaymentMethod>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string | null;
}

export const initialPaymentMethodsState: PaymentMethodsState = {
    data: [],
    loading: false,
    loaded: false,
    error: null
};
