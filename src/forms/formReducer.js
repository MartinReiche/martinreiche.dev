function reducer(state, { type, payload }) {
  switch (type) {
    case 'change':
      return {
        ...state,
        [payload.name]: { ...state[payload.name], value: payload.value }
      };
    case 'error':
      return {
        ...state,
        [payload.name]: { ...state[payload.name], error: payload.error }
      };

    default:
      return state;
  }
}

export default reducer;
