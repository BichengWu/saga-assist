import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Action } from "./action";

interface RootStore {
    [k: string]: object;
}

export const rootState: RootStore = {};

function reducer(state = rootState, action: Action) {
    switch (action.type) {
        case "SET_STATE":
            return { ...state, [action.module]: Object.assign(state[action.module] || {}, action.payload) };
        case "UPDATE_LOADING":
            // TODO
            return state;
        case "UPDATE_ERROR":
            // TODO
            return state;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const runSaga = sagaMiddleware.run;

export { store, runSaga };
