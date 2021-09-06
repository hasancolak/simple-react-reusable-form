import { UPDATE_FORM, SUBMIT_FORM, SUBMIT_FORM_SUCCESS } from "./types";

/**
 * @function updateForm
 * @param  {any} payload
 */
export const updateForm = (payload: any) => (dispatch: any) =>
  dispatch({ type: UPDATE_FORM, payload });

/**
 * @function submitForm
 * @param  {any} =>(dispatch
 */
export const submitForm = () => (dispatch: any) => {
  dispatch({ type: SUBMIT_FORM });
};

/**
 * @function submitFormSuccess
 * @param  {any} =>(dispatch
 */
export const submitFormSuccess = () => (dispatch: any) => {
  dispatch({ type: SUBMIT_FORM_SUCCESS });
};
