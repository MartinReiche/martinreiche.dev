import { SET_ABOUT_LOADED } from '../types';

export const initialState = { aboutLoaded: false };

export default function(state, action) {
  switch (action.type) {
    case SET_ABOUT_LOADED:
      return { ...state, aboutLoaded: true };
    default:
      return state;
  }
}

export * from './actionCreators';
