import { Text } from "./component";
import { register, Module } from "@src";
import { State } from "./type";

const initialState: State = {
    num: 0
};

class TextMain extends Module<State> {
    *add() {
        const {num} = this.state;
        yield* this.setState({num: num + 1});
    }

    *minus() {
        const {num} = this.state;
        yield* yield* this.setState({num: num - 1});
    }

    *reset(){
        yield* this.resetState();
    }
}

const actions = register(new TextMain("TextMain", initialState));

export { actions, Text };
