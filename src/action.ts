import {Action as ReduxAction} from "redux";

export type ActionType = "UPDATE_STATE" | "UPDATE_LOADING" | "UPDATE_ERROR";

export interface Action extends ReduxAction<ActionType> {
    payload: any;
}
