import { IPaymentMethod } from 'src/app/types/payment-method';

export interface PaymentsState {
    data: ReadonlyArray<IPaymentMethod>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string | null;
}

export const initialPaymentsState: PaymentsState = {
    data: [],
    loading: false,
    loaded: false,
    error: null
};
