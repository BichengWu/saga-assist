import { Text } from "./component";
import { register, Module } from "@src";
import { State } from "./type";

const initialState: State = {
    num: 0
};

class TextMain extends Module<State> {
    *add(num: number) {
        yield* this.setState({num: num + 1});
    }

    *minus(num: number) {
        yield* yield* this.setState({num: num - 1});
    }
}

const actions = register(new TextMain("TextMain", initialState));

export { actions, Text };
