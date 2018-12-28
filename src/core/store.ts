import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Action } from "./action";

interface RootStore {
    [k: string]: object;
}

export const rootState: RootStore = {
    "@@loading": {}
};

function reducer(state = rootState, action: Action) {
    switch (action.type) {
        case "SET_STATE":
            return { ...state, [action.module!]: Object.assign(state[action.module!] || {}, action.payload) };
        case "UPDATE_LOADING":
            return { ...state, "@@loading": Object.assign(state["@@loading"], action.payload) };
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const runSaga = sagaMiddleware.run;

export { store, runSaga };
