import { CONTACT_STOP_LOADING, CONTACT_START_LOADING } from '../types';

export const contactStartLoading = payload => ({
  type: CONTACT_START_LOADING,
  payload
});
export const contactStopLoading = () => ({
  type: CONTACT_STOP_LOADING
});
