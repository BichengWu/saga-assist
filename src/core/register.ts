import { runSaga } from "./store";
import { errorHandler } from "./exception";

export function register<T extends object>(methodObj: T) {
    return new Proxy(methodObj, {
        get(target, key) {
            if (target[key] instanceof Function) {
                return function saga(...args: any[]) {
                    runSaga(function*() {
                        try {
                            yield* target[key].apply(methodObj, args);
                        } catch (error) {
                            errorHandler(error);
                        }
                    });
                };
            } else {
                return Reflect.get(target, key);
            }
        }
    });
}
