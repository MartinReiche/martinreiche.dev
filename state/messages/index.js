import {
  ERROR,
  MESSAGE,
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
  CLEAR_ALL_MESSAGES,
  START_LOADING,
  STOP_LOADING
} from '../types';

export const initialState = {};

export default function(state, action) {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.payload };
    case MESSAGE:
      return { ...state, message: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: undefined };
    case CLEAR_MESSAGES:
      return { ...state, message: undefined };
    case CLEAR_ALL_MESSAGES:
      return { ...state, message: undefined, error: undefined };
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export * from './actionCreators';
