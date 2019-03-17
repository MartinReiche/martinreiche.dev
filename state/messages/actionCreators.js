import {
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
  CLEAR_ALL_MESSAGES,
  START_LOADING,
  STOP_LOADING,
  ERROR,
  MESSAGE
} from '../types';
export const clearErrors = () => ({ type: CLEAR_ERRORS });
export const clearMessages = () => ({ type: CLEAR_MESSAGES });
export const clearAllMessages = () => ({ type: CLEAR_ALL_MESSAGES });
export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });
export const dispatchError = err => ({ type: ERROR, payload: err });
export const dispatchMessage = msg => ({ type: MESSAGE, payload: msg });
