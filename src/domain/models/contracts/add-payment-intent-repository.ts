import { PaymentIntentModel } from "../payment-intent";

export const ADD_PAYMENT_INTENT_REPOSITORY = "ADD_PAYMENT_INTENT_REPOSITORY"; 

export interface IAddPaymentIntentRepository {
    addPaymentIntentRepository: (data: PaymentIntentModel) => Promise<any>
}