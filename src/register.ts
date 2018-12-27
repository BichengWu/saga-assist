import { runSaga } from "./store";

export function register<T extends object>(actions: T) {
    return new Proxy(actions, {
        get(target, key) {
            if (target[key] instanceof Function) {
                return function saga(...args: any[]) {
                    runSaga.apply(undefined, [target[key].bind(actions), ...args] as any);
                };
            } else {
                return Reflect.get(target, key);
            }
        }
    });
}
