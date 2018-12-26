import {put} from "redux-saga/effects";
import {delay} from "redux-saga";
import {Text} from "./component"
import {register} from "@src";

class TextMain {
    *add(num: number) {
        console.info("number", num);
        yield delay(500);
        yield put({type: "UPDATE_STATE", payload: {Text: {num: num + 1}}});
    }

    *minus(num: number) {
        yield delay(500);
        yield put({type: "UPDATE_STATE", payload:  {Text: {num: num - 1}}});
    }
}
const actions = register("Text", new TextMain(), {num: 0});

export {actions, Text}