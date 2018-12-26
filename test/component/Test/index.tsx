import {put} from "redux-saga/effects";
import {delay} from "redux-saga";
import {Text} from "./component"

class TextMain {
    *add(num: number) {
        yield delay(500);
        yield put({type: "add", payload: num + 1});
    }

    *minus(num: number) {
        yield delay(500);
        yield put({type: "minus", payload: num - 1});
    }
}
const actions = new TextMain();

export {actions, Text}