import { Action as ReduxAction } from "redux";

type ActionType = "SET_STATE" | "UPDATE_LOADING" | "UPDATE_ERROR";

export interface Action extends ReduxAction<ActionType> {
    module: string;
    payload: object;
}

export const setStateAction = (module: string, payload: object) => ({
    type: "SET_STATE" as ActionType,
    module,
    payload
});
