import { Action, Reducer } from "redux";
import { setIn } from "timm";
import AppState from "../AppState";
import { initialState } from "../state/initialState";
import {
  UPDATE_FORM,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
} from "../actions/types";

/**
 * @param  {AppState=initialState} state
 * @param  {any} action
 * @returns AppState
 */
export const rootReducer: Reducer<AppState, Action> = (
  state: AppState = initialState,
  action: any
): AppState => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value } = action.payload;
      const newState: any = setIn(state, ["data", name], value);

      return newState;
    case SUBMIT_FORM: {
      const { disable: isDisable } = state;
      const newState = setIn(
        setIn(state, ["apiSuccess"], false) as AppState,
        ["disable"],
        !isDisable
      );

      return newState as AppState;
    }
    case SUBMIT_FORM_SUCCESS: {
      const { disable: isDisable, apiSuccess: isSuccess } = state;
      const newState = setIn(
        setIn(state, ["disable"], !isDisable) as AppState,
        ["apiSuccess"],
        !isSuccess
      );

      return newState as AppState;
    }
    default:
      return state;
  }
};
