import { put } from "redux-saga/effects";
import { runSaga, store } from "./store";
import { Action } from "./action";

export class Module<S> {
    constructor(private readonly moduleName: string, protected initialState: S) {
        this.moduleName = moduleName;
        this.initialState = initialState;
        // register initial state
        runSaga(this.setState.bind(this), initialState);
    }

    protected *setState(state: Partial<S>) {
        yield put<Action>({ type: "UPDATE_STATE", payload: { [this.moduleName]: state } });
    }

    protected *resetState(){
        yield put<Action>({type: "UPDATE_STATE", payload: {[this.moduleName]: this.initialState}});
    }

    protected get state() {
        return store.getState()[this.moduleName] as S;
    }
}
