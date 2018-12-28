import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { register } from "./register";
import { Module } from "./module";
import { call } from "./effects";

function run(App: React.ComponentType) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}

export { run, register, Module, call };
