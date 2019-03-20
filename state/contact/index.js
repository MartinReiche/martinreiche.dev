import { CONTACT_START_LOADING, CONTACT_STOP_LOADING } from '../types';

export const initialState = { loading: false };

export default function(state, { type, payload }) {
  switch (type) {
    case CONTACT_START_LOADING:
      return {
        loading: true,
        message: payload
      };
    case CONTACT_STOP_LOADING:
      return {
        loading: false
      };

    default:
      return state;
  }
}

export * from './actionCreators';
