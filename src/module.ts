import {put} from "redux-saga/effects";
import {runSaga} from "./store";
import {Action} from "./action";

export class Module<S> {
    public readonly moduleName: string;
    public initialState: S;
    constructor(moduleName: string, initialState: S) {
        this.moduleName = moduleName;
        this.initialState = initialState;

        // register initial state
        runSaga(this.setState.bind(this), initialState);
    }

    protected *setState(state: Partial<S>) {
        yield put<Action>({type: "UPDATE_STATE", payload: {[this.moduleName]: state}})
    }
}