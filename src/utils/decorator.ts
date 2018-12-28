import { SagaIterator } from "redux-saga";
import { put } from "redux-saga/effects";
import { loadingAction } from "../core/action";

export const functionDecoratorHandler = (intercept: (f: (...args: any[]) => SagaIterator) => SagaIterator) => {
    return function d(target: object, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = function*(...args: any[]) {
            yield* intercept(fn.bind(this, ...args));
        };
        return descriptor;
    };
};

export const loading = (field: string) => {
    return functionDecoratorHandler(function*(fn) {
        try {
            yield put(loadingAction({ [field]: true }));
            yield* fn();
        } finally {
            yield put(loadingAction({ [field]: false }));
        }
    });
};
