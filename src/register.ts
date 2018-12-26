// import {SagaIterator} from "redux-saga";
import { runSaga } from "./store";
import { totalState } from "./store";

export function register<T extends object, S>(moduleName: string, actions: T, initState: S) {
    totalState[moduleName] = initState;
    return new Proxy(actions, {
        get(target, key) {
            console.log("Proxy", target, key);
            if (target[key] instanceof Function) {
                return function a(...args:any[]) {
                    switch (args.length) {
                        case 0:
                            runSaga(target[key]);
                            break;
                        case 1:
                            console.log("case 1", args);
                            runSaga(target[key], args[0]);
                            break;
                        case 2:
                            runSaga(target[key], args[0], args[1]);
                            break;
                        case 3:
                            runSaga(target[key], args[0], args[1], args[2]);
                            break;
                        case 4:
                            runSaga(target[key], args[0], args[1], args[2], args[3]);
                            break;
                        case 5:
                            runSaga(target[key], args[0], args[1], args[2], args[3], args[4]);
                            break;
                        case 6:
                            runSaga(target[key], args[0], args[1], args[2], args[3], args[4], args[5]);
                            break;
                        default:
                            // runSaga(target[key], ...args);
                            runSaga(target[key]);
                    }
                };
            } else {
                return Reflect.get(target, key);
            }
        }
    });
}
