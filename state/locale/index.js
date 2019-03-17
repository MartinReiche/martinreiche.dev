import { SET_LOCALE } from '../types';

export const initialState = 'de';

export default function(state, action) {
  switch (action.type) {
    case SET_LOCALE:
      return action.payload;
    default:
      return state;
  }
}

export * from './actionCreators';
