import { put } from "redux-saga/effects";
import { runSaga, store } from "./store";
import { Action, setStateAction } from "./action";

export class Module<S extends object> {
    constructor(private readonly moduleName: string, private initialState: S) {
        runSaga(this.setState.bind(this), initialState);
    }

    protected *setState(state: Partial<S>) {
        yield put<Action>(setStateAction(this.moduleName, state));
    }

    protected *resetState() {
        yield put<Action>(setStateAction(this.moduleName, this.initialState));
    }

    protected get state() {
        return store.getState()[this.moduleName] as S;
    }
}
