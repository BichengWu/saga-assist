import {call as sagaCall, CallEffect} from "redux-saga/effects";

export function call <P extends any[], R>(fn: (...args: P) => Promise<R>, ...rest: P): CallEffect{
    return sagaCall.apply(undefined, [fn, ...rest] as any);
}
