import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Action } from "./action";

export const rootState = {};

function reducer(state = rootState, action: Action) {
    switch (action.type) {
        case "UPDATE_STATE":
            return { ...state, ...action.payload };
        case "UPDATE_LOADING":
            return state;
        case "UPDATE_ERROR":
            return state;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const runSaga = sagaMiddleware.run;

export { store, runSaga };
