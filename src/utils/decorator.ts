// export const functionDecoratorHandler = (callback: (f: () => void) => void) => {
//     return function d(target: object, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
//         const fn = descriptor.value;
//         descriptor.value = function* () {
//             callback(fn);
//         }
//         return descriptor;
//     };
// };

export const loading = (str: string) => null 