import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { SET_LOCALE } from './types';

// Import Reducers
import localeReducer, { initialState as initialLocale } from './locale';
import messagesReducer, { initialState as initialMessages } from './messages';
import contactReducer, { initialState as initialContact } from './messages';
import layoutReducer, { initialState as initialLayout } from './layout';
import { persistLocaleState } from '../utils';

// Combine Initial State
export const initialState = {
  locale: initialLocale,
  messages: initialMessages,
  contact: initialContact,
  layout: initialLayout
};

// Combine all reducers
export const rootReducer = (state, action) => {
  // Middleware
  if (action.type === SET_LOCALE) persistLocaleState(action.payload);
  // return root reducer
  return {
    locale: localeReducer(state.locale, action),
    messages: messagesReducer(state.messages, action),
    contact: contactReducer(state.contact, action),
    layout: layoutReducer(state.layout, action)
  };
};

// Export actionCreators
export * from './locale';
export * from './messages';
export * from './contact';
export * from './layout';

// Define Utility Functions and Provider
export const StateContext = createContext();
export const StateProvider = ({
  reducer = rootReducer,
  initialState = initialState,
  children
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};
// Gets called from functional Component to access global state
export const getState = () => useContext(StateContext);
