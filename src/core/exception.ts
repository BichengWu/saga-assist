class Exception<T> {
    constructor(public message: T) {}
}
// errorCode exception
export class APIException<T> extends Exception<T> {}
// errorMessage exception
export class ErrorMessageException<T> extends Exception<T> {}

export const errorHandler = <T>(err: T) => {
    console.info("exception: \n", err);
};
