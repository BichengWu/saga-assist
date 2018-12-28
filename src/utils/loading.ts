import {store} from "../core/store";
import {loadingAction} from "../core/action";

export const getLoading = (field: string): boolean| undefined => store.getState()["@@loading"][field];

export const updateLoading = (field: string, value: boolean) => store.dispatch(loadingAction({[field]: value}));