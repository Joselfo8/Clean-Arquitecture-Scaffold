import { ADD_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/add-payment-intent-repository";
import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/add-user-repository";
import { GET_USER_REPOSITORY } from "@/domain/models/contracts/get-user-repository";
import { GET_USERS_REPOSITORY } from "@/domain/models/contracts/get-users-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/models/contracts/update-user-repository";
import { ADD_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/add-payment-intent-service";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { GET_USER_SERVICE } from "@/domain/use-cases/get-user-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/get-users-service";
import { AddPaymentIntentServiceImpl } from "@/domain/use-cases/impl/add-payment-intent-service-impl";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { GetUserServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/get-users-service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/update-user-service-impl";
import { UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import { PaymentIntentMongooseRepositoryAdapter } from "../adapters/orm/mongoose/payment-intent-mongoose-repository-adapter";

export const adapters = [
    // User
    {
        provide: ADD_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: GET_USERS_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: GET_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: UPDATE_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    // Payment-Intent
    {
        provide: ADD_PAYMENT_INTENT_REPOSITORY,
        useClass: PaymentIntentMongooseRepositoryAdapter
    },
];

export const services = [
    // User
    {
        provide: ADD_USER_SERVICE,
        useClass: AddUserServiceImpl
    },
    {
        provide: GET_USERS_SERVICE,
        useClass: GetUsersServiceImpl
    },
    {
        provide: GET_USER_SERVICE,
        useClass: GetUserServiceImpl
    },
    {
        provide: UPDATE_USER_SERVICE,
        useClass: UpdateUserServiceImpl
    },
    // Payment-Intent
    {
        provide: ADD_PAYMENT_INTENT_SERVICE,
        useClass: AddPaymentIntentServiceImpl
    },
]