import "./normalize.css";

import {render} from "@src";
import {Text} from "./component/Test";

render(Text);


// function* add() {
// 	const newNum: number = yield select((state: typeof initState) => state.number);
// 	yield delay();
// 	yield put({type: "add", payload: newNum + 1});

// }

// function* minus() {
// 	const newNum: number = yield select((state: typeof initState) => state.number);
// 	yield delay();
// 	yield put({type: "add", payload: newNum - 1});

// }



// function delay(time: number = 1000) {
// 	return new Promise(resolve => {
// 		setTimeout(resolve, time)
// 	})
// }