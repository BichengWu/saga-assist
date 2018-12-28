import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./core/store";

import { register } from "./core/register";
import { Module } from "./core/module";
import { call } from "./core/effects";

import { loading } from "./utils/decorator";
import { getLoading, updateLoading } from "./utils/loading";

function run(App: React.ComponentType, rootId: string) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById(rootId)
    );
}

// core
export { run, register, Module, call };

// utils
export { loading, getLoading, updateLoading };
