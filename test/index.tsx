import * as React from "react";
import * as ReactDOM from "react-dom";
import "./normalize.css";

import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import createSagaMiddleware from "redux-saga";
import {put, select} from "redux-saga/effects";

interface Action {
    type: string;
    payload: number;
}

// reducer
const initState = {
    number: 0
};

function reducer(state = initState, action: Action) {
    switch (action.type) {
        case "add":
        case "minus":
            return { ...state, number: action.payload };
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

class Text extends React.PureComponent<{ num: number }> {
    render() {
        return <span style={{marginLeft: 20}}>{this.props.num}</span>;
    }
}

const mapStateToProps = (state: typeof initState) => {
    return {
        num: state.number
    };
};

const ConnectText = connect(mapStateToProps)(Text);

function* add() {
	const newNum: number = yield select((state: typeof initState) => state.number);
	yield delay();
	yield put({type: "add", payload: newNum + 1});

}

function* minus() {
	const newNum: number = yield select((state: typeof initState) => state.number);
	yield delay();
	yield put({type: "add", payload: newNum - 1});

}

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 20 }}>
            <button onClick={() => sagaMiddleware.run(add)}>递增 1</button>
            <button onClick={() => sagaMiddleware.run(minus)}>递减 1</button>
            <ConnectText />
        </div>
    </Provider>,
    document.getElementById("root")
);



function delay(time: number = 1000) {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}