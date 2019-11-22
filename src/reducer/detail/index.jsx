const initialState = {
  loading: true,
  details: {},
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUSET':
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        details: action.payload
      };
    case 'FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export { initialState, reducer };
