import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
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

export const run  = sagaMiddleware.run;

export function render(App: React.ComponentType) {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root")
    );
}