import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

interface Action {
    type: string;
    payload: number;
}

// reducer
const initState = {
    num: 0
};

function reducer(state = initState, action: Action) {
    switch (action.type) {
        case "add":
        case "minus":
            return { ...state, num: action.payload };
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
const runSaga  = sagaMiddleware.run;

export {store, runSaga};