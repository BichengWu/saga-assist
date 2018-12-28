import { Test } from "./component";
import { register, Module, call } from "@src";
import { State } from "./type";

const initialState: State = {
    num: 0
};

class TestMain extends Module<State> {
    *add() {
        const {num} = this.state;
        yield* this.setState({num: num + 1});
    }

    *minus() {
        const {num} = this.state;
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
        reject([{id}])
    });
}