import { Test } from "./component";
import { register, Module, loading } from "@src";
import { State } from "./type";
import { delay } from "redux-saga";
import { call } from "redux-saga/effects";

const initialState: State = {
    num: 0
};

class TestMain extends Module<State> {
    @loading("loading+..")
    *add() {
        const {num} = this.state;
        yield delay(1000);
        yield* this.setState({num: num + 1});
    }

    @loading("loading-..")
    *minus() {
        const {num} = this.state;
        yield delay(1000);
        yield* this.setState({num: num - 1});
    }

    *reset(){
        yield* this.resetState();
    }

    *getList() {
        const list = yield call(getList, "1");
        console.log("list: ", list);
    }
}

const actions = register(new TestMain("TestMain", initialState));

export { actions, Test };




// http request

function getList(id: string): Promise<Array<{id: string}>> {
    return new Promise((resolve, reject) => {
        resolve([{id}])
    });
}