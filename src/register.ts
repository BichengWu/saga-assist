import { runSaga } from "./store";

export function register<T extends object>(actions: T) {
    return new Proxy(actions, {
        get(target, key) {
            if (target[key] instanceof Function) {
                // TODO: 待改进
                return function saga(p1?: any, p2?: any, p3?: any, p4?: any, p5?: any, p6?: any) {
                    if (arguments.length > 6) {
                        throw new Error(`function ${key as string} should be less than six parameters`)
                    }
                    runSaga(target[key].bind(actions), p1, p2, p3, p4, p5, p6);
                };
            } else {
                return Reflect.get(target, key);
            }
        }
    });
}
