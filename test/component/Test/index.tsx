import { Test } from "./component";
import { register, Module } from "@src";
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
        yield* this.setState({num: num + 1});
    }

    *reset(){
        yield* this.resetState();
    }
}

const actions = register(new TestMain("TestMain", initialState));

export { actions, Test };
